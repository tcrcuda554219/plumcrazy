import type { Metadata } from "next";
import { Bricolage_Grotesque, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Plumb Crazy Plumbing — Leaks. Clogs. Handled. | Las Vegas",
  description:
    "Full-service plumbing for Las Vegas — residential and commercial. Drain cleaning, hydro-jetting, sewer repair, water heaters, leak detection, repiping, and water treatment, with a 24-hour emergency service department.",
  // STAGING: keep out of search indexes until production launch on the final domain.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
