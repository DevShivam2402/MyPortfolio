
import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL('https://shivamdev24.vercel.app/blog'),
    title: {
        default: "Coming Soon | Shivam Sharma Blog",
        template: "%s | Shivam Sharma"
    },
    description: "Shivam Sharma's personal blog is coming soon! Explore insights on web development, FullStack expertise, and cutting-edge technologies. Stay tuned for updates.",
    keywords: [
        'Shivam Sharma Blog',
        'Developer Blog',
        'FullStack Developer Insights',
        'Web Development Blog',
        'Coding Tips and Tutorials',
        'Frontend Development Articles',
        'Backend Development Articles',
        'MERN Stack Blog',
        'React Blog',
        'Next.js Blog',
        'Shivam Sharma Portfolio',
        'Coming Soon Blog'
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
        title: 'Coming Soon | Shivam Sharma Blog',
        description: 'Shivam Sharma\'s blog is under construction. Stay tuned for articles on FullStack development and web technologies.',
        siteName: 'Shivam Sharma',
        images: [
            {
                url: '/blog-coming-soon-og.png',
                width: 1200,
                height: 630,
                alt: 'Coming Soon - Shivam Sharma Blog'
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coming Soon | Shivam Sharma Blog',
        description: 'Shivam Sharma\'s blog is under construction. Stay tuned for insights on FullStack development and web technologies!',
        creator: '@ShivamDev24',
        images: ['/blog-coming-soon-twitter.png'],
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
        canonical: 'https://shivamdev24.vercel.app/blog',
    },
    verification: {
        google: 'your-google-verification-code',
    }
};





function page() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-gray-800">Coming Soon.......</h1>
              <p className="text-lg text-gray-600">
                  This page is under construction. Stay tuned for updates!
              </p>
          </div>
      </div>
  )
}

export default page
