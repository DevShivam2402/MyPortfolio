import React from 'react';
// import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    About Me
                </h2>
                <div className=" items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-indigo-600 p-4 ">
                            Full Stack Developer
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            I am a Full Stack developer based in India. I&apos;m an Computer Science Engineering undergraduate from SRGC. I&apos;m passionate about creating functional, and user-friendly websites and applications, and I&apos;m constantly pushing myself to learn and grow as a developer.
                        </p>
                        {/* <p className="text-gray-700 leading-relaxed">
                            As a Junior Frontend Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.
                        </p> */}
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
                                <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm ">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutSection;