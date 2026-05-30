import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

/* ══════════════════════════════════════════════════════
   PREMIUM EDITORIAL FONT STACK
   • Plus Jakarta Sans — Neue Montreal-style display
   • Manrope          — Clean geometric body text
 ══════════════════════════════════════════════════════ */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDEOANS — Digital Infrastructure for Every Business",
  description:
    "We build world-class digital infrastructure for schools, colleges, gyms, healthcare, real estate, startups, and enterprises. Websites, AI automation, CRM systems, and growth infrastructure.",
  keywords: [
    "Digital Infrastructure",
    "IDEOANS",
    "AI Automation",
    "CRM Systems",
    "Business Websites",
    "Growth Infrastructure",
    "School Management System",
    "Healthcare Digital Solutions",
    "Enterprise Digital Platform",
    "Lead Generation",
  ],
  authors: [{ name: "IDEOANS" }],
  robots: "index, follow",
  openGraph: {
    title: "IDEOANS — Digital Infrastructure for Every Business",
    description:
      "We build world-class digital infrastructure — websites, AI automation, CRM systems, and growth engines for modern organizations.",
    type: "website",
    siteName: "IDEOANS",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEOANS — Digital Infrastructure for Every Business",
    description:
      "We build world-class digital infrastructure for schools, gyms, healthcare, real estate, startups, and enterprises.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

import { ThemeProvider } from "next-themes";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" style={{ background: "#050505", color: "#FFFFFF" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <CustomCursor />
            <div className="relative z-10 w-full flex flex-col flex-grow">
              {children}
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
