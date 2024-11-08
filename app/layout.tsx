import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Make title more descriptive and keyword-rich
  title: "The Radical Teachings of Jesus | November 2024 Conference & Events",
  // Expand description with more relevant keywords and details
  description:
    "Join our transformative conference exploring Jesus's radical teachings every weekend of November 2024. Featuring expert speakers, interactive workshops, and community discussions on faith, social justice, and spiritual growth.",
  // Add additional metadata
  keywords:
    "Jesus teachings, radical Christianity, faith conference, spiritual events, November 2024, religious workshops",
  openGraph: {
    title: "The Radical Teachings of Jesus | November 2024 Conference & Events",
    description:
      "Join our transformative conference exploring Jesus's radical teachings every weekend of November 2024. Featuring expert speakers, interactive workshops, and community discussions.",
    type: "website",
    locale: "en_US",
    url: "https://mountain-view-sda.vercel.app/",
    siteName: "The Radical Teachings Conference",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Radical Teachings of Jesus | November 2024",
    description:
      "Join our transformative conference exploring Jesus's radical teachings every weekend of November 2024.",
  },
  // Add canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://mountain-view-sda.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
