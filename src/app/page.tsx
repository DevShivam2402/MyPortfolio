// app/page.js
'use client';
import { useState } from 'react';
// import WebsitePreview from '@/component/Projectpreview';
import { GithubIcon, LinkedinIcon, Mail, MapPin, Twitter } from 'lucide-react';
import Image from 'next/image';
import One from '@/asset/1.webp';
import Two from '@/asset/2.webp';
import Three from '@/asset/3.webp';
import Four from '@/asset/4.webp';
import Five from '@/asset/5.webp';
import Six from '@/asset/6.webp';
import Seven from '@/asset/7.webp';
import Eight from '@/asset/8.webp';
import Nine from '@/asset/9.webp';
import Navbar from "@/app/component/Navbar";




const skills = [
  {
    name: "HTML5",
    logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },
  { name: "CSS",
    logo:"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
   },
  { name: "JavaScript", logo:"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"},
  { name: "React", logo:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name: "SASS", logo:"https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg" },

  { name: "Express", logo:"https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
  { name: "Figma", logo:"https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Firebase", logo:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Git", logo:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Git lab", logo:"https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
  { name: "Github", logo:"https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  { name: "Linux", logo:"https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "MongoDB", logo:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Next.js", logo:"https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
  { name: "Node.js", logo:"https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" },
  { name: "Postman", logo:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Python", logo:"https://www.vectorlogo.zone/logos/python/python-icon.svg" },
 
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "TypeScript", logo:"https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialLink = ({ href, icon }: any) => (
  <a
    href={href}
    className="text-gray-600 hover:text-emerald-600 transition-colors"
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
    src: One,
    link: 'https://www.refinix.in/'
  },
  {
    src: Two,
    link: 'https://woodandveneer.in/'
  },
  {
    src: Three,
    link: 'https://epichair.vercel.app/'
  },
  {

    src: Four,
    link: 'https://www.birparagliding.in/'
  },
  {
    src: Five,
    link: 'https://www.noblessetech.com/'
  },
  {
    src: Six,
    link: 'https://www.tecklo.co/'
  },
  {
    src: Seven,
    link: 'https://shelvestech.com/'
  },
  {
    src: Eight,
    link: 'https://homestay-iota.vercel.app/'
  },
  {
    src: Nine,
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
    <div className="min-h-screen bg-white dark:bg-zinc-800 p-8">
      {/* Navigation remains the same */}
      <Navbar />


      {/* Enhanced Hero Section */}
      <section id="home" className=" h-full flex items-center">
        <div className="max-w-4xl mx-auto ">
          <div className="grid md:grid-cols-1 gap-8 items-center justify-center">
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
            {/* <div className='flex justify-center items-center'>
              <div className="hero-img w-80 h-80 sm:w-80 sm:h-80 border rounded-md -z-10  hover:shadow-xl duration-300 hover:shadow-purple-300"></div>
            </div> */}
            <div className="text-start">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white my-4 font-mono">
                {/* <TypewriterText text="" /> */}
                Hi, I'm Shivam Sharma,
              </h1>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-600 dark:text-white my-4 font-mono">
                {/* <TypewriterText text="" /> */}
               I Build Functional & User-Friendly Digital Experiences
              </h2>

              <p className="text-sm sm:text-lg font-medium text-gray-800 dark:text-gray-200 mb-8">
                Full Stack Developer | CSE Undergrad | Passionate About Code & Innovation
              </p>
              <div className="flex  items-center space-x-4">
                {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                  Download CV
                </button> */}
                <a href="mailto:shivam.dev2402@gmail.com" className="border-2 border-emerald-500 bg-emerald-500 dark:bg-white dark:text-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 duration-500">
                  Hire Me
                </a>
                <div className="">
                  <div className="flex justify-center space-x-6">
                    <SocialLink
                      href="https://github.com/shivamdev24"
                      icon={<GithubIcon size={24} />}
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/shivam-sharma-6a414a295/"
                      icon={<LinkedinIcon size={24} />}
                    />
                    {/* <SocialLink
                      href="mailto:shivam.dev2402@gmail.com"
                      icon={<Mail size={24} />}
                    /> */}
                    <SocialLink
                      href="https://twitter.com/ShivamDev24"
                      icon={<Twitter size={24} />}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-10">
        <div className="max-w-4xl mx-auto   ">

          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className=" bg-white shadow-md rounded-lg border border-gray-100 aspect-square justify-center text-sm flex items-center gap-2"
              >
                {skill.logo && (
                  <Image src={skill.logo} width={50} height={50}  alt={skill.name} />
                )}
                
              </span>
            ))}
          </div>


          {/* <h2 className="text-3xl font-bold text-center text-emerald-600 mb-12">
            About Me
          </h2> */}
          <div className=" items-center">
            <div className="space-y-6">
              {/* <span className="text-xl font-bold bg-emerald-600 p-2 px-4 rounded-xl text-white">
                Full Stack Developer
              </span>
              <p className="text-gray-600 leading-relaxed">
                I am a Full Stack developer based in India. I&apos;m an Computer Science Engineering undergraduate from SRGC. I&apos;m passionate about creating functional, and user-friendly websites and applications, and I&apos;m constantly pushing myself to learn and grow as a developer.
              </p> */}
              {/* <p className="text-gray-700 leading-relaxed">
                            As a Junior Frontend Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.
                        </p> */}
              {/* <p className='mt-10 underline'>Tech Stack :</p> */}
              {/* <div className="flex flex-wrap gap-2">
                {[
                  'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
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
                      <Image src={skill} width={100} height={100} alt='Tech Stack' />
                    </span>
                  ))}
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-start dark:text-white text-emerald-600 mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 dark:border-none border border-emerald-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-600 dark:text-white">{exp.position}</h3>
                    <div className="flex justify-between gap-4"> <p className="text-emerald-500 dark:text-white">{exp.company}</p>
                      <span className="dark:text-gray-400 text-gray-800 text-sm pt-1 md:hidden">{exp.period}</span></div>
                  </div>
                  <span className="dark:text-gray-400 text-gray-800 hidden md:block">{exp.period}</span>
                </div>
                <div className="dark:text-gray-400 text-gray-800 mb-4">

                  {exp.description.map((tech, i) => (
                    <li key={i} className="px-3 py-1  dark:text-gray-400 text-gray-800  text-sm">
                      {tech}
                    </li>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-600 dark:bg-zinc-600 text-white  rounded-md text-sm">
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
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl font-bold text-start text-emerald-600 dark:text-white mb-12">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 rounded-lg border border-emerald-300 dark:border-none p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <div className="flex justify-between gap-4">
                      <p className="text-gray-500 dark:text-white">{edu.school}</p>

                      <span className="dark:text-gray-400 text-gray-800 md:hidden  ">{edu.period}</span>

                    </div>


                  </div>
                  <span className="dark:text-gray-400 text-gray-800 hidden md:block">{edu.period}</span>
                </div>
                {/* <p className="text-gray-700">{edu.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="project" className="py-20 ">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl font-bold text-start dark:text-white text-emerald-500 mb-12">
            Projects
          </h2>
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
           

            {projects.map((project, index) => (

               <WebsitePreview key={index} url={project.link} />
            
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:border sm:p-4 rounded-md border-emerald-600 bg-gray-50 dark:bg-white">
            {/* Render the first two projects or all projects based on 'showAll' */}
            {(showAll ? projects : projects.slice(0, 2)).map((project, index) => (
              <a
              key={index}
                href={project.link}
                className="block p-1 border-emerald-200 border  shadow rounded-xl hover:shadow-md duration-500 hover:shadow-emerald-600 h-full max-w-xl  "
                style={{ fontSize: 0 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.src}
                  width={1000} // Updated size for responsiveness
                  height={1000}
                  priority={true}
                  className="rounded-md  h-[30vh] w-full object-cover"
                  alt="preview image"
                />
              </a>
            ))}

            {/* Button to toggle visibility */}
          </div>
            <div className="col-span-full text-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition duration-300"
              >
                {showAll ? "Show Less" : "Show All Projects"}
              </button>
            </div>
        </div>
      </section>

      {/* Skills and Projects sections remain the same */}

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 rounded-lg  dark:bg-zinc-900 ">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-8 text-emerald-600 text-center">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-emerald-600" />
                  <a
                    href="mailto:shivam.dev2402@gmail.com"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    shivam.dev2402@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-emerald-600" />
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
            <div className="text-center mt-8 text-gray-600 dark:text-white">
              <p>Feel free to reach out through any of these platforms.</p>
              <p className="mt-2">I&apos;ll get back to you as soon as possible!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


