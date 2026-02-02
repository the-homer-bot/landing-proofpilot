'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, BadgeCheck, Lock, Zap, Share2, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' }),
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-950 to-teal-900/20" />
        
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Trusted by 127+ indie hackers</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Prove Your Revenue</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent gradient-animate">
              Is Actually Real
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Connect Stripe or Gumroad and get tamper-proof revenue screenshots with{' '}
            <span className="text-emerald-400 font-semibold">verified badges</span> that build trust in the build-in-public community.
          </motion.p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 glow-emerald"
            >
              {isLoading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-sm mt-4"
          >
            No spam, ever. Unsubscribe anytime.
          </motion.p>

          {/* Verified screenshot mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-lg mx-auto glow-emerald">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Monthly Revenue</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <BadgeCheck className="w-4 h-4 text-emerald-400 pulse-check" />
                  <span className="text-emerald-400 text-xs font-medium">Verified by ProofPilot</span>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">$12,847</div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">+23% from last month</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
                <span>Source: Stripe API</span>
                <span>Verified: Feb 2, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Anyone Can Fake a Screenshot
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The build-in-public community runs on trust. But when anyone can inspect element their way to $50k MRR, 
              that trust erodes fast.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Fakers everywhere',
                description: 'Inspect element takes 5 seconds. Fake gurus use it to sell courses.',
              },
              {
                icon: '😤',
                title: 'Real builders suffer',
                description: 'Your legitimate success gets dismissed as "probably fake too."',
              },
              {
                icon: '🤷',
                title: 'No way to verify',
                description: 'Screenshots look the same whether real or fabricated.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Verification That <span className="text-emerald-400">Actually Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ProofPilot connects directly to your payment provider. No screenshots to fake, no numbers to edit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-emerald-400" />,
                title: 'Connect Securely',
                description: 'Read-only OAuth with Stripe, Gumroad, or Paddle. We never touch your money.',
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-emerald-400" />,
                title: 'Generate Proof',
                description: 'Get tamper-proof screenshots with cryptographic verification badges.',
              },
              {
                icon: <Share2 className="w-8 h-8 text-emerald-400" />,
                title: 'Share With Pride',
                description: 'Post revenue updates that anyone can verify with one click.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
              <div className="flex -space-x-2">
                {['👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🚀', '👩‍🚀'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm border-2 border-gray-900">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-emerald-300 font-medium">127+ indie hackers on the waitlist</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for <span className="text-emerald-400">Real Builders</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  quote: "Finally, a way to prove I'm not just another fake guru. This is exactly what the #buildinpublic community needs.",
                  author: "Sarah K.",
                  role: "SaaS Founder",
                },
                {
                  quote: "Tired of people doubting my revenue screenshots. ProofPilot lets my numbers speak for themselves.",
                  author: "Mike R.",
                  role: "Indie Hacker",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-left"
                >
                  <p className="text-gray-300 mb-4">"{item.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <span className="text-emerald-400 font-semibold">{item.author[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{item.author}</div>
                      <div className="text-gray-500 text-sm">{item.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Early access launching soon</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be a Founding Member
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the waitlist and get lifetime access to founding member pricing when we launch.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? '...' : 'Join Waitlist'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">
              Free during beta. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-400" />
            <span className="text-white font-semibold">ProofPilot</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 ProofPilot. Building trust in public.
          </p>
        </div>
      </footer>
    </main>
  );
}
