import { NextRequest, NextResponse } from 'next/server';

const PROJECT_SLUG = 'proofpilot';
const IDEA_ID = process.env.IDEA_ID || 'f8b3d495-6f83-45ef-9f07-1bd8455cb5ce';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Log the subscription (in production, save to database)
    console.log(`New subscriber: ${email} | Source: ${source} | Project: ${PROJECT_SLUG} | Idea: ${IDEA_ID}`);

    // If DATABASE_URL is available, store in Postgres
    const databaseUrl = process.env.DATABASE_URL;
    if (databaseUrl) {
      try {
        // Use dynamic import to avoid build errors when pg isn't available
        const { Client } = await import('pg');
        const client = new Client({ connectionString: databaseUrl });
        await client.connect();
        
        // Create table if not exists
        await client.query(`
          CREATE TABLE IF NOT EXISTS landing_subscribers (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL,
            project_slug TEXT NOT NULL,
            idea_id TEXT,
            source TEXT,
            created_at TIMESTAMP DEFAULT NOW()
          )
        `);
        
        // Create unique index if not exists
        await client.query(`
          CREATE UNIQUE INDEX IF NOT EXISTS idx_landing_subscribers_email_project 
          ON landing_subscribers(email, project_slug)
        `);
        
        // Insert subscriber (ignore duplicates)
        await client.query(
          `INSERT INTO landing_subscribers (email, project_slug, idea_id, source) 
           VALUES ($1, $2, $3, $4) 
           ON CONFLICT (email, project_slug) DO NOTHING`,
          [email, PROJECT_SLUG, IDEA_ID, source]
        );
        
        await client.end();
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue even if DB fails - we logged the email above
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' }, 
      { status: 500 }
    );
  }
}
