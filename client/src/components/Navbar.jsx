import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className='w-full py-2 px-6 flex justify-between items-center border-b-2 border-gray-300 text-lg sticky top-0 bg-white z-50'>
            {/* Left: Logo */}
            <div
                className='font-bold text-2xl hover:cursor-pointer text-[#1266ed] hover:text-[#154fb8] transition flex items-center justify-center'
                onClick={() => {
                    navigate('/');
                    closeMenu();
                }}
            >
                📚StudyCache
            </div>

            {/* Middle: Nav Links (Desktop) */}
            <div className='hidden md:flex gap-6 font-semibold'>
                <Link to="/" className='hover:text-[#1266ed]'>Home</Link>
                <Link to="/resources" className='hover:text-[#1266ed]'>Resources</Link>
                <Link to="/upload" className='hover:text-[#1266ed]'>Upload</Link>
                <Link to="/request" className='hover:text-[#1266ed]'>Request</Link>
                <span
                    className='hover:text-[#1266ed] cursor-pointer'
                    onClick={() => {
                        navigate('/', { state: { scrollTo: 'contribute' } });
                    }}
                >
                    Contribute
                </span>
            </div>

            {/* Right: GitHub & Hamburger */}
            <div className='flex items-center gap-4'>
                <div className='hidden md:flex flex-col justify-center items-center'>
                    <a
                        className='flex items-center gap-2 cursor-pointer'
                        href="https://github.com/akshatp17/StudyCache"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> GitHub Repo
                    </a>
                    <div className='text-xs text-gray-500'>
                        Star this repo to support us! ⭐
                    </div>
                </div>

                {/* Hamburger Icon */}
                <button className='md:hidden text-2xl focus:outline-none' onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-md flex flex-col px-6 py-4 space-y-4 md:hidden z-40'>
                    <Link to="/" onClick={closeMenu} className='hover:text-[#1266ed]'>Home</Link>
                    <Link to="/resources" onClick={closeMenu} className='hover:text-[#1266ed]'>Resources</Link>
                    <Link to="/upload" onClick={closeMenu} className='hover:text-[#1266ed]'>Upload</Link>
                    <Link to="/request" onClick={closeMenu} className='hover:text-[#1266ed]'>Request</Link>
                    <span
                        className='hover:text-[#1266ed] cursor-pointer'
                        onClick={() => {
                            navigate('/', { state: { scrollTo: 'contribute' } });
                            closeMenu();
                        }}
                    >
                        Contribute
                    </span>
                    <div className='pt-4 border-t border-gray-300'>
                        <a
                            className='flex items-center gap-2 cursor-pointer'
                            href="https://github.com/akshatp17/StudyCache"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> GitHub Repo
                        </a>
                        <div className='text-xs text-gray-500'>
                            Star this repo to support us! ⭐
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
