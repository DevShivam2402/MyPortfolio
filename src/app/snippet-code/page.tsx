
import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL('https://shivamdev24.vercel.app/snippets'),
    title: {
        default: "Coming Soon | Shivam Sharma Snippets",
        template: "%s | Shivam Sharma"
    },
    description: "Explore Shivam Sharma's code snippets, showcasing his expertise as a FullStack Developer. This section is currently under construction, stay tuned for updates!",
    keywords: [
        'Coming Soon',
        'Code Snippets',
        'Developer Portfolio',
        'Shivam Sharma',
        'FullStack Developer',
        'Web Development Snippets',
        'Frontend Code Examples',
        'Backend Code Examples',
        'React Snippets',
        'Next.js Snippets',
        'MERN Stack Code'
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
        title: 'Coming Soon | Shivam Sharma Snippets',
        description: 'Discover Shivam Sharma\'s upcoming snippet showcase featuring projects and code examples.',
        siteName: 'Shivam Sharma',
        images: [
            {
                url: '/coming-soon-og.png',
                width: 1200,
                height: 630,
                alt: 'Coming Soon - Shivam Sharma Snippets'
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coming Soon | Shivam Sharma Snippets',
        description: 'Explore Shivam Sharma\'s snippet showcase. Stay tuned for updates on exciting code snippets!',
        creator: '@ShivamDev24',
        images: ['/coming-soon-twitter.png'],
    },
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://shivamdev24.vercel.app/snippets',
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
