import WebsitePreview from "@/component/Projectpreview";
import type { Metadata } from "next";
import React from 'react'

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


const projects = [
    {

        link: 'https://www.refinix.in/'
    },
    {

        link: 'https://woodandveneer.in/'
    },
    {

        link: 'https://epichair.vercel.app/'
    },
    {

        link: 'https://www.birparagliding.in/'
    },
    {

        link: 'https://www.noblessetech.com/'
    },
    {

        link: 'https://www.tecklo.co/'
    },
    {

        link: 'https://shelvestech.com/'
    },
    {

        link: 'https://homestay-iota.vercel.app/'
    },
    {

        link: 'https://beeryani.vercel.app/'
    },
];


function page() {
  return (
    <div className="max-w-5xl mx-auto py-20 pt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Render the first two projects or all projects based on 'showAll' */}
              {projects.map((project, index) => (
                  <WebsitePreview key={index} url={project.link} />
              ))}

             
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">Personal Project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="w-full bg-white h-full overflow-hidden border  rounded-xl">
                  <div className="p-2 w-full  h-full  ">
                      <div className="w-full h-[40vh]  bg-gray-400 rounded-lg inset-0 animate-pulse items-center justify-center flex" >
                          <div className="font-extrabold text-white text-2xl">Coming Soon......</div>
                      </div>
                      <div className="space-y-5 h-full  justify-between  flex flex-col p-4">
                          <div className="bg-gray-400 h-10 rounded-lg inset-0 animate-pulse w-[70%]" />
                      </div>
                  </div>
              </div>

             
          </div>
    </div>
  )
}

export default page
