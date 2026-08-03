import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mian Muhammad Umer — Software Engineer",
  description:
    "Portfolio of Mian Muhammad Umer — Software Engineer specializing in web development, app development, and automation. Building digital solutions that make a difference.",
  keywords: [
    "software engineer",
    "web developer",
    "app developer",
    "automation",
    "portfolio",
    "Mian Muhammad Umer",
  ],
  authors: [{ name: "Mian Muhammad Umer" }],
  openGraph: {
    title: "Mian Muhammad Umer — Software Engineer",
    description:
      "Software Engineer specializing in web development, app development, and automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mian Muhammad Umer — Software Engineer",
    description:
      "Software Engineer specializing in web development, app development, and automation.",
  },
};

import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter)" }}>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
