import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackWise",
  description: "The YouTube Course Progress Tracker",
  openGraph: {
    title: "TrackWise",
    description: "Track your progress through YouTube courses",
    url: "https://yudoku.vercel.app", // URL not changed to avoid breaking anything
    siteName: "TrackWise",
    images: [
      {
        url: "homepage.png",
        width: 1200,
        height: 630,
        alt: "TrackWise platform thumbnail",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Analytics />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
