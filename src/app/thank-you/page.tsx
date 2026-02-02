'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Share2, Twitter, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ThankYou() {
  const shareText = encodeURIComponent(
    "Just joined the waitlist for ProofPilot - verified revenue screenshots for indie hackers! No more fake screenshots. 🛡️\n\nCheck it out:"
  );
  const shareUrl = encodeURIComponent("https://landing-proofpilot.vercel.app");

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-950 to-teal-900/20" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-24 h-24 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          You're on the list!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 mb-8"
        >
          Welcome to the founding members club. You'll be among the first to verify your revenue when we launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8"
        >
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <Share2 className="w-5 h-5 text-emerald-400" />
            Share with fellow builders
          </h2>
          <p className="text-gray-400 mb-4">
            Help us spread the word and earn priority access when we launch!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-white transition-all"
            >
              <Twitter className="w-5 h-5" />
              Share on X
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('https://landing-proofpilot.vercel.app');
                alert('Link copied!');
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 transition-all"
            >
              Copy Link
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8"
        >
          <h3 className="text-white font-semibold mb-2">🎁 Founding Member Benefits</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Lifetime discount on all plans
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Priority feature requests
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Early access to new integrations
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <Shield className="w-5 h-5" />
            <span>Back to ProofPilot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
