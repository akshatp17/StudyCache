import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between border-gray-300">
            <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} StudyCache. All rights reserved.
            </p>
            <p className='text-sm text-muted-foreground twxt-center w-auto'>
                <span>Created by </span>
                <a
                    className='text-blue-ribbon-600 cursor-pointer'
                    href="https://github.com/akshatp17"
                    target="_blank"
                >
                    Akshat Pratyush
                </a>
                <span> & Others Talented Contributers⭐ </span>
            </p>
            <nav className="flex gap-4 sm:gap-6">
                <Link className="text-xs hover:text-blue-ribbon-400 transition-colors" to={"/policy"}>
                    Disclaimer
                </Link>
            </nav>
        </footer>
    )
}

export default Footer
