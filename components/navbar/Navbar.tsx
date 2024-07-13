'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-10 ${
        isScrolled ? 'bg-opacity-90 bg-white border-b-1 dark:bg-black border-lm scroll-smooth' : 'bg-opacity-10 bg-white dark:bg-opacity-0'
      }`}>
            <div className='flex justify-between items-center h-[60px] px-4'>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar