import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Cell | IET Lucknow — Entrepreneurship Cell",
  description:
    "Entrepreneurship Cell of Institute of Engineering and Technology, Lucknow. Fostering innovation, student-led startups, and venture creation.",
  keywords: [
    "E-Cell",
    "IET Lucknow",
    "Entrepreneurship",
    "Startups",
    "Incubation",
    "Innovation",
  ],
  metadataBase: new URL("https://ietlucknow.netlify.app"),
  openGraph: {
    title: "E-Cell | IET Lucknow",
    description:
      "Entrepreneurship Cell of IET Lucknow — Fostering Innovation & Startup Culture",
    url: "https://ietlucknow.netlify.app",
    siteName: "E-Cell IET Lucknow",
    images: [
      {
        url: "/ecell-logo.png",
        width: 800,
        height: 600,
        alt: "E-Cell IET Lucknow Crest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Cell | IET Lucknow",
    description:
      "Entrepreneurship Cell of IET Lucknow — Fostering Innovation & Startup Culture",
    images: ["/ecell-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ecell-logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${inter.className} font-body bg-background text-foreground antialiased selection:bg-ecell-gold/20 selection:text-ecell-gold`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
