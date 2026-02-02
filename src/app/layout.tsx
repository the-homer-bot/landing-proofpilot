import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProofPilot - Verified Revenue Screenshots for Indie Hackers",
  description: "Connect Stripe or Gumroad and get tamper-proof revenue screenshots with verified badges. Build trust in the build-in-public community.",
  keywords: ["revenue verification", "indie hackers", "build in public", "stripe", "gumroad", "verified screenshots"],
  openGraph: {
    title: "ProofPilot - Prove Your Revenue Is Real",
    description: "Tamper-proof revenue screenshots with verified badges. No more fake revenue screenshots.",
    type: "website",
    url: "https://landing-proofpilot.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofPilot - Verified Revenue Screenshots",
    description: "Build trust in the #buildinpublic community with verified revenue proof",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
