import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/'); // Navigate to the home page
    }
    return (
        <nav className='w-full py-2 px-3 flex justify-between items-center border-b-2 border-gray-300 text-lg sticky top-0 bg-[#fffffff9]'>
            {/* Left Section of the Navbar */}
            <div
                className='font-bold text-2xl hover:cursor-pointer text-[#1266ed] hover:text-[#154fb8] transition flex items-center justify-center'
                onClick={handleLogoClick} // Add onClick event to the logo
            >
                📚StudyCache
            </div>
            {/* Middle Section of the Navbar */}
            <div className='w-auto flex justify-center items-center font-semibold'>
                <Link to="/" className='mx-4 hover:text-[#1266ed]'>Home</Link>
                <Link to="/resources" className='mx-4 hover:text-[#1266ed]'>Resources</Link>
                <Link to="/upload" className='mx-4 hover:text-[#1266ed]'>Upload</Link>
                <Link to="/request" className='mx-4 hover:text-[#1266ed]'>Request</Link>
                <span
                    className='mx-4 hover:text-[#1266ed] cursor-pointer'
                    onClick={() => {
                        navigate('/', { state: { scrollTo: 'contribute' } });
                    }}
                >
                    Contribute
                </span>

            </div>
            {/* Github Repo Star */}
            <div className='flex flex-col justify-center items-center'>
                <a className='flex items-center gap-2 cursor-pointer' href="https://github.com/akshatp17/StudyCache" target="_blank">
                    <FaGithub /> GitHub Repo
                </a>
                <div className='text-xs text-gray-500'>
                    Star this repo to support us! ⭐
                </div>
            </div>
        </nav>
    )
}

export default Navbar
