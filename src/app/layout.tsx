import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: "Shivam Sharma | FullStack Developer",
    template: "%s | Shivam Sharma"
  },
  description: "FullStack Developer specializing in MERN Stack, Next.js, and modern web technologies. Computer Science Engineering graduate building scalable web applications with expertise in both frontend and backend development.",
  keywords: [
    // Personal Branding
    'Shivam Sharma',
    'shivamdev24',
    'ShivamDev24',

    // Core Roles
    'FullStack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Developer',

    // Technologies - Frontend
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'UI Developer',

    // Technologies - Backend
    'Node.js Developer',
    'Express.js Developer',
    'MongoDB Developer',
    'API Developer',

    // Stack Specific
    'MERN Stack Developer',
    'JAMstack Developer',

    // Location
    'India',
    'Indian Developer',

    // Additional Skills
    'REST API',
    'Database Design',
    'Cloud Computing',
    'Web Security',
    'Performance Optimization'
  ],
  authors: [{ name: 'Shivam Sharma' }],
  creator: 'Shivam Sharma',
  publisher: 'Shivam Sharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Shivam Sharma | FullStack Developer',
    description: 'FullStack Developer crafting end-to-end web solutions with MERN Stack, Next.js, and modern web technologies.',
    siteName: 'Shivam Sharma',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shivam Sharma - FullStack Developer Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Sharma | FullStack Developer',
    description: 'FullStack Developer crafting end-to-end web solutions with MERN Stack, Next.js, and modern web technologies.',
    creator: '@ShivamDev24',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yourportfolio.com',
  },
  verification: {
    google: 'your-google-verification-code',
  }
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
