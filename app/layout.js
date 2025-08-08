
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "My Portfolio – Professional Web Development",
  description:
    "I design and develop high-performance, visually stunning, and fully responsive websites tailored to your needs. From concept to launch, I bring your vision to life.",
  keywords: [
    "web development",
    "portfolio",
    "freelance developer",
    "responsive website",
    "Next.js",
    "frontend development",
    "UI/UX design",
    "modern web design",
  ],
  authors: [{ name: "Jehad Horani", url: "https://www.linkedin.com/in/jehad-alhourani-33909a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" }],
  openGraph: {
    title: "My Portfolio – Professional Web Development",
    description:
      "High-performance, visually stunning, and fully responsive websites tailored to your needs.",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio – Professional Web Development",
    description:
      "High-performance, visually stunning, and fully responsive websites tailored to your needs.",
    images: ["/JH logo.png"],
    creator: "https://www.linkedin.com/in/jehad-alhourani-33909a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar/>

      
        {children}
         <Footer/>
      </body>
    </html>
  );
}
