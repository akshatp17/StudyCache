import React from 'react'
import helloimage from '../assets/hello.svg';
import contribute from '../assets/contribute.svg';
import dsce from '../assets/dsce.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo === 'contribute') {
            const element = document.getElementById('contribute');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState({}, document.title);
            }
        }
    }, [location]);


    return (
        <div className='flex flex-col justify-center items-center gap-10 py-5 px-3 bg-[#f6faff6c]'>
            {/* Welcoming to the site */}
            <section className='h-1/3 flex py-4 px-2 bg-white shadow-md rounded-lg gap-10 w-full'>
                <div className='flex flex-col justify-center items-start gap-4 w-1/2 p-10'>
                    <h1 className='text-3xl font-bold'>StudyCache</h1>
                    <p className='text-xl'>One stop for all your academic solutions. Be it books, notes, assignments, practicals, question papers, exam solutions, we got you covered!</p>
                </div>
                <div className='flex justify-center items-center w-1/2 h-full'>
                    <img src={helloimage} alt="Hello" className='h-full w-[80%]' />
                </div>
            </section>

            {/* Who is this resrouce for? */}
            <section className='h-1/3 flex flex-col py-4 px-2 bg-white shadow-md rounded-lg gap-10 w-full'>
                <p>
                    Who is StudyCache for?
                </p>
                <div className='flex justify-center items-center gap-10 w-full'>
                    <p className='w-[60%]'>
                        StudyCache is an open-access platform built to help DSCE students easily find, share, and download academic resources — including notes, previous year question papers, reference books, and more.
                    </p>
                    <img src={dsce} alt="DSCE Logo" className='w-auto' />
                </div>
            </section>

            {/* Features of the site */}
            <section className='h-1/3 flex py-4 px-2 bg-white shadow-md rounded-lg gap-10 w-full'>
                Hi1
            </section>

            {/* Contribute */}
            <section
                id="contribute"
                className='h-1/3 flex flex-col py-4 px-2 bg-white shadow-md rounded-lg gap-6 w-full'
            >
                <h2 className='text-2xl font-semibold'>Contribute to StudyCache</h2>
                <p className='text-lg'>
                    StudyCache is an open-source project, and we welcome contributions from the community! Whether it's adding new resources, fixing bugs, or improving the platform, your help is invaluable.
                </p>
                <ul className='list-disc list-inside text-lg'>
                    <li>Fork the repository on GitHub.</li>
                    <li>Clone your forked repository to your local machine.</li>
                    <li>Create a new branch for your feature or bug fix.</li>
                    <li>Make your changes and commit them with clear messages.</li>
                    <li>Push your changes to your forked repository.</li>
                    <li>Submit a pull request to the main repository.</li>
                </ul>
                <p className='text-lg'>
                    For detailed contribution guidelines, please visit our{' '}
                    <a
                        href="https://github.com/akshatp17/StudyCache"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-blue-ribbon-600 hover:underline'
                    >
                        GitHub repository
                    </a>.
                </p>
            </section>
        </div>
    )
}

export default Home
