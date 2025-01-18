// app/page.js
'use client';
import { useState } from 'react';
import WebsitePreview from '@/component/Projectpreview';

import { GithubIcon, LinkedinIcon, Mail,  MapPin,  Twitter } from 'lucide-react';
// import { GithubIcon, LinkedinIcon, Mail,  MapPin,  Twitter, ExternalLink } from 'lucide-react';

// import Image from "next/image"
// import Avatar from "@/assets/Avatar.png"
// import AboutSection from '@/component/About';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialLink = ({ href, icon }: any) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);


// interface TypewriterTextProps {
//   text: string; 
//   speed?: number; 
// }

// const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 150 }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, speed);
//       return () => clearTimeout(timer);
//     }
//   }, [index, text, speed]);

//   return <span className="font-mono">{displayText}</span>;
// };

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


const experiences = [
  {
    company: 'Freelance',
    position: 'Full Stack Developer',
    period: 'Dec 2023 - Present',
    description: ['Engineered OTP-SMS authentication system using MERN stack and Next.js, integrating SMS gateway and admin dashboard for monitoring message delivery status',
      'Developed responsive website interfaces with reusable components and performance optimization techniques'
    ],
    tech: ['React', 'Node.js', 'HTML', 'CSS', 'Tailwind', 'Express', 'MongoDB', 'NextJs']
  },
  {
    company: 'Noblesse Tech',
    position: 'Software Developer',
    period: 'May 2023 - Nov 2023',
    description: ["Developed full-stack web applications using MERN stack, improving site functionality and user experience", "Built and optimized responsive web pages using Next.js and React.js for enhanced performance", "Created RESTful APIs using Node.js and Express.js for seamless frontend- backend integration"],
    tech: ['React', 'Node.js', 'HTML', 'CSS', 'Tailwind', 'Express', 'MongoDB', 'NextJs']
  }
];

const education = [
  {
    degree: 'Bachelor of Computer Science and Engineering',
    school: 'SRGC',
    period: '2018 - 2022',
    // description: 'Specialized in Web Technologies and Cloud Computing'
  },
  {
    degree: 'Intermediate ',
    school: 'K.L Janta Inter College',
    period: '2018',
    // description: 'Dean\'s List, Computer Science Club President'  
  }
];

// Previous skills and projects arrays remain the same

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to toggle project visibility


  return (
    <div className="min-h-screen ">
      {/* Navigation remains the same */}

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-10 pb-20 h-screen sm:h-[35vh] lg:h-[100vh] flex items-center">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            {/* <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
                
                <Image
                  src={Avatar}
                  alt="Profile"
                  className="rounded-xl   object-cover border-4 border-white shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div> */}
            <div className='flex justify-center items-center'>
              <div className="hero-img w-80 h-80 sm:w-80 sm:h-80 border rounded-md -z-10  hover:shadow-xl duration-300 hover:shadow-purple-300"></div>
            </div>
            <div className="text-start">
              <h1 className="text-6xl font-extrabold text-gray-900 my-4 font-mono">
                {/* <TypewriterText text="" /> */}
                Full Stack Developer
              </h1>
              
              <p className="text-xl font-medium text-gray-400 mb-8">
                Crafting modern web experiences with MERN stack
              </p>
              <div className="flex space-x-4">
                {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                  Download CV
                </button> */}
                <button className="border-2 border-indigo-600 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 duration-500">
                  Contact Me
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-hite">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
            About Me
          </h2>
          <div className=" items-center">
            <div className="space-y-6">
              <span className="text-xl font-bold bg-indigo-600 p-2 px-4 rounded-xl text-white">
                Full Stack Developer
              </span>
              <p className="text-gray-600 leading-relaxed">
                I am a Full Stack developer based in India. I&apos;m an Computer Science Engineering undergraduate from SRGC. I&apos;m passionate about creating functional, and user-friendly websites and applications, and I&apos;m constantly pushing myself to learn and grow as a developer.
              </p>
              {/* <p className="text-gray-700 leading-relaxed">
                            As a Junior Frontend Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.
                        </p> */}
                        <p className='mt-10 underline'>Tech Stack :</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Tailwind',
                  'SCSS',
                  'Bash',
                  'Chart.js',
                  'CSS3',
                  'Express',
                  'Figma',
                  'Firebase',
                  'Git',
                  'HTML5',
                  'Linux',
                  'MongoDB',
                  'Next.js',
                  'Node.js',
                  'Postman',
                  'Python',
                  'Sass',
                  'Tailwind CSS',
                  'TypeScript'
                ]
                  .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-800 text-white rounded-full text-sm ">
                      {skill}
                    </span>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 ">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-600">{exp.position}</h3>
                    <div className="flex justify-between gap-4"> <p className="text-indigo-500">{exp.company}</p>
                      <span className="text-gray-600 md:hidden">{exp.period}</span></div>
                  </div>
                  <span className="text-gray-600 hidden md:block">{exp.period}</span>
                </div>
                <div className="text-gray-700 mb-4">

                  {exp.description.map((tech, i) => (
                    <li key={i} className="px-3 py-1  text-gray-600  text-sm">
                      {tech}
                    </li>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-600 text-indigo-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 ">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-600">{edu.degree}</h3>
                    <div className="flex justify-between gap-4">
                    <p className="text-indigo-500">{edu.school}</p>

                  <span className="text-gray-600 md:hidden  ">{edu.period}</span>

                    </div>

                    
                  </div>
                  <span className="text-gray-600 hidden md:block">{edu.period}</span>
                </div>
                {/* <p className="text-gray-700">{edu.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="project" className="py-20 ">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Projects
          </h2>
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
           

            {projects.map((project, index) => (

               <WebsitePreview key={index} url={project.link} />
            
            ))}
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Render the first two projects or all projects based on 'showAll' */}
            {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
              <WebsitePreview key={index} url={project.link} />
            ))}

            {/* Button to toggle visibility */}
            <div className="col-span-full text-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {showAll ? "Show Less" : "Show All Projects"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Projects sections remain the same */}

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-8 text-indigo-600 text-center">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-indigo-600" />
                  <a
                    href="mailto:shivam.dev2402@gmail.com"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    shivam.dev2402@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-indigo-600" />
                  <span className="text-gray-600">India</span>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-center space-x-6">
                    <SocialLink
                      href="https://github.com/shivamdev24"
                      icon={<GithubIcon size={24} />}
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/shivam-sharma-6a414a295/"
                      icon={<LinkedinIcon size={24} />}
                    />
                    <SocialLink
                      href="mailto:shivam.dev2402@gmail.com"
                      icon={<Mail size={24} />}
                    />
                    <SocialLink
                      href="https://twitter.com/ShivamDev24"
                      icon={<Twitter size={24} />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-600">
              <p>Feel free to reach out through any of these platforms.</p>
              <p className="mt-2">I&apos;ll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
