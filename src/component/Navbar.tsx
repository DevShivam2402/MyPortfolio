"use client"


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image"
import Avatar from "@/assets/Avatar.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" shadow fixed w-full top-10 z-50 backdrop bg-white">
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name with hover animation */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            <Image
                                src={Avatar}
                                alt="Profile"
                                className="rounded-xl h-20 w-20   object-cover border-4 border-white shadow-lg"
                                width={60}
                                height={60}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation with hover animations */}
                    <div className="hidden md:block ">
                        <div className='flex items-center gap-8'>
                            {['Project', 'Blog', 'Snippet Code'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="relative text-black hover:text-blue-600 transition-all duration-300 group"
                                >
                                    {item}
                                   
                                </Link>
                            ))}
                       </div>
                       
                    </div>

                    {/* Mobile Menu Button with rotation animation */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-300"
                        >
                            <div className="transform transition-transform duration-300">
                                {isOpen ? <X size={24} className="rotate-90" /> : <Menu size={24} />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation with slide and fade animations */}
                {/* <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        {['Projects', 'Blog', 'Snippet Code'].map((item, index) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2"
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;