import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "TherapySiteStudio — Websites for Therapists & Psychologists",
  description:
    "Beautiful, stress-free websites tailored for therapists, psychologists, and mental health professionals. HIPAA-aware, modern design to attract more clients.",
  keywords: [
    "therapist website design",
    "psychologist websites",
    "mental health website development",
    "HIPAA compliant web design",
    "private practice website",
    "therapy web development",
    "professional websites for therapists",
  ].join(", "),
  authors: [{ name: "TherapySiteStudio", url: "https://therapysitestudio.com" }],
  openGraph: {
    title: "TherapySiteStudio — Websites for Therapists & Psychologists",
    description:
      "Beautiful, stress-free websites tailored for therapists, psychologists, and mental health professionals.",
    url: "https://therapysitestudio.com",
    siteName: "TherapySiteStudio",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/TSS%20OG%20IMAGE.png?alt=media&token=6e450d0c-aae0-4d17-8432-d9566964e1f3",
        width: 1200,
        height: 630,
        alt: "TherapySiteStudio branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#0c0f25" />
</head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
