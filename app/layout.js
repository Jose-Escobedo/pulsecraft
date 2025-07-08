import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BillboardCTA from "@/components/Billboard";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pulsecraft — Small Business Websites That Convert",
  description:
    "Modern, purpose-built websites designed to grow your brand. From strategy to launch, Pulsecraft delivers clean, high-performing digital experiences.",
  keywords: [
    "web development agency",
    "custom websites",
    "responsive design",
    "Next.js developer",
    "small business website",
    "Los Angeles web agency",
    "branding and design",
    "full-stack development",
    "Pulsecraft",
  ].join(", "),
  authors: [{ name: "Pulsecraft", url: "https://pulsecraft.dev" }],
  openGraph: {
    title: "Pulsecraft — Custom Websites That Convert",
    description:
      "Modern, purpose-built websites designed to grow your brand. From strategy to launch, Pulsecraft delivers clean, high-performing digital experiences.",
    url: "https://pulsecraft.dev",
    siteName: "Pulsecraft",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraft.png?alt=media&token=3185b202-42f0-4258-b13b-6dc3744ba5e8",
        width: 1080,
        height: 1080,
        alt: "Pulsecraft branding",
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
        <meta name="theme-color" content="#F8F9FA" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
    rel="stylesheet"
  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
         <BillboardCTA/>
      <Footer />
      </body>
    </html>
  );
}
