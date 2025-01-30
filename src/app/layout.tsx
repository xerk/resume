import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | ${DATA.role}`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Ahmed Mamdouh",
    "Software Engineer",
    "Full Stack Developer",
    "Laravel",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Vue.js",
    "React",
    ...DATA.skills
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    siteName: DATA.name,
    title: `${DATA.name} | ${DATA.role}`,
    description: DATA.description,
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: DATA.name,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | ${DATA.role}`,
    description: DATA.description,
    creator: "@xerk",
    images: [`${DATA.url}/og-image.png`],
  },
  verification: {
    google: "RB2dzZGLiNJe7uPzE0s-vpARRoG0ZGv_6mOFsIlFAf4",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      style={{ 
        scrollBehavior: 'smooth',
        '--scroll-duration': '1200ms',
        '--scroll-timing': 'cubic-bezier(0.45, 0.05, 0.35, 1)',
      } as React.CSSProperties}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/60 hover:scrollbar-thumb-gray-500/80",
          "dark:scrollbar-thumb-gray-600/60 dark:hover:scrollbar-thumb-gray-500/80",
          "transition-all duration-300 ease-in-out",
          fontSans.variable
        )}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
