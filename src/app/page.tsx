// app/page.js
'use client';
import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, Mail,  MapPin,  Twitter, ExternalLink } from 'lucide-react';

// import Image from "next/image"
// import Avatar from "@/assets/Avatar.png"
import AboutSection from '@/component/About';



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


interface TypewriterTextProps {
  text: string; 
  speed?: number; 
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span className="font-mono">{displayText}</span>;
};

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Built a responsive personal portfolio using Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS'],
    link: 'https://your-portfolio.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce application with secure payment integration.',
    tech: ['React', 'Node.js', 'Stripe'],
    link: 'https://ecommerce-demo.com'
  },
  {
    title: 'Blog Platform',
    description: 'Created a dynamic blog site with markdown support and server-side rendering.',
    tech: ['Gatsby', 'GraphQL', 'Contentful'],
    link: 'https://blog-example.com'
  }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation remains the same */}

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div> */}
                <div className="hero-img w-72 h-72 sm:w-80 sm:h-80 border rounded-md  hover:shadow-xl duration-300 hover:shadow-purple-300"></div>
                {/* <Image
                  src={Avatar}
                  alt="Profile"
                  className="rounded-xl   object-cover border-4 border-white shadow-lg"
                  width={1000}
                  height={1000}
                /> */}
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">
                <TypewriterText text="Full Stack Developer" />
              </h1>
              
              <p className="text-xl font-medium text-gray-600 mb-8">
                Crafting modern web experiences with MERN stack
              </p>
              <div className="flex space-x-4">
                {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                  Download CV
                </button> */}
                <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white duration-500">
                  Contact Me
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

        <AboutSection/>
      <section className="max-w-4xl mx-auto">
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <div className="flex justify-between"> <p className="text-indigo-600">{exp.company}</p>
                      <span className="text-gray-600 md:hidden">{exp.period}</span></div>
                  </div>
                  <span className="text-gray-600 hidden md:block">{exp.period}</span>
                </div>
                <p className="text-gray-700 mb-4">

                  {exp.description.map((tech, i) => (
                    <li key={i} className="px-3 py-1  text-gray-900  text-sm">
                      {tech}
                    </li>
                  ))}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
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
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <div className="flex justify-between">
                    <p className="text-indigo-600">{edu.school}</p>

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
      <section id="project" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 group hover:shadow-md transition-shadow duration-600">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline duration-500 group-hover:translate-x-3 group-hover:-translate-y-3"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills and Projects sections remain the same */}

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-8 text-indigo-600 text-center">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-indigo-600" />
                  <a
                    href="mailto:shivam.dev2402@gmail.com"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    shivam.dev2402@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-indigo-600" />
                  <span className="text-gray-700">India</span>
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
