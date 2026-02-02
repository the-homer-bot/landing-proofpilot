import { NextRequest, NextResponse } from 'next/server';

const PROJECT_SLUG = 'proofpilot';
const IDEA_ID = process.env.IDEA_ID || 'f8b3d495-6f83-45ef-9f07-1bd8455cb5ce';

// In-memory store for demo (in production, use Vercel KV, Postgres, etc.)
const subscribers: Set<string> = new Set();

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Log the subscription
    console.log(`📧 New subscriber: ${email} | Source: ${source} | Project: ${PROJECT_SLUG} | Idea: ${IDEA_ID}`);
    
    // Add to in-memory set (won't persist across cold starts, but logs will show in Vercel)
    subscribers.add(email);
    console.log(`📊 Total subscribers this instance: ${subscribers.size}`);

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

export async function GET() {
  return NextResponse.json({ 
    project: PROJECT_SLUG,
    count: subscribers.size,
    message: 'ProofPilot Waitlist API' 
  });
}
