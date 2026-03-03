import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRUCampPro",
  description: "Premium Football Camp Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-900 text-white min-h-screen overflow-x-hidden relative selection:bg-accent-blue selection:text-white`}>
        {/* Dynamic Background Gradient Mesh */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-600/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/20 blur-[120px] animate-lava-flow" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-brand-700/40 blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        {/* Mobile-first constraints - Max Width MD for the App Vibe */}
        <div className="relative mx-auto max-w-md h-[100dvh] overflow-y-auto overflow-x-hidden flex flex-col pt-8 px-4 sm:px-6 shadow-2xl bg-black/10 backdrop-blur-[2px]">
          {children}
        </div>
      </body>
    </html>
  );
}
