import React, { useEffect } from 'react';
import helloimage from '../assets/hello.svg';
import contribute from '../assets/contribute.svg';
import whofeature from '../assets/rtk.svg';
import dsce from '../assets/dsce.png';
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
        if (location.state?.scrollTo === 'homeStart') {
            // Scroll to very top of the page instead of the section
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div className='flex flex-col items-center text-gray-800'>
            {/* Welcome Section */}
            <section className="md:min-h-[calc(100vh-100px)] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center px-6 md:px-16 py-12 bg-white w-full">
                {/* Left Part */}
                <div className="flex flex-col justify-center items-start space-y-4 md:w-1/2 w-full h-full pl-5 text-center md:text-left">
                    <p className="text-3xl md:text-4xl font-medium text-blue-ribbon-600 w-full">
                        Welcome to
                    </p>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-ribbon-700 w-full">
                        StudyCache
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 max-w-x w-full">
                        Your one-stop solution for academic resources. Whether it's books, notes,
                        assignments, practicals, question papers, or exam solutions — we've got
                        you covered!
                    </p>
                </div>

                {/* Right Part */}
                <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2 w-full">
                    <img
                        src={helloimage}
                        alt="Hello"
                        className="w-[90%] md:max-w-full max-w-md object-contain"
                    />
                </div>
            </section>


            {/* Who is this for Section */}
            <section className='bg-blue-ribbon-600 text-white py-16 px-6 w-full text-center'>
                <h2 className='text-4xl font-semibold mb-6 md:mb-0'>Who is StudyCache for?</h2>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto'>
                    <p className='md:w-3/5 text-lg leading-relaxed'>
                        StudyCache is an open-access platform built to help DSCE students easily find, share, and download
                        academic resources — including notes, previous year question papers, reference books, and more.
                    </p>
                    <img src={whofeature} alt="DSCE Logo" className='w-64 md:w-96' />
                </div>
            </section>

            {/* Features Section */}
            <section className='py-16 px-6 w-full bg-white'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl font-semibold mb-4 text-blue-ribbon-600'>✨ Features</h2>
                    <p className='text-lg'>
                        Easily browse categorized resources, contribute your own materials, and help build a
                        thriving academic support system. These are the features we offer:
                    </p>
                </div>
            </section>

            {/* Contribute Section */}
            <section
                id="contribute"
                className="md:min-h-[calc(100vh-100px)] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center px-6 md:px-16 py-12 bg-gray-100 w-full"
            >
                {/* Left Part */}
                <div className="flex flex-col justify-center items-start space-y-4 md:w-1/2 w-full h-full text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-ribbon-600 w-full">
                        Contribute to StudyCache
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 w-full">
                        StudyCache is an open-source project. Whether you're adding new resources,
                        fixing bugs, or improving the platform — we welcome all contributions!
                    </p>
                    <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 w-full">
                        <li>Fork the repository on GitHub.</li>
                        <li>Clone your forked repository to your local machine.</li>
                        <li>Create a new branch for your feature or bug fix.</li>
                        <li>Make your changes and commit them with clear messages.</li>
                        <li>Push your changes to your forked repository.</li>
                        <li>Submit a pull request to the main repository.</li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-700 w-full">
                        For detailed contribution guidelines, please visit our{' '}
                        <a
                            href="https://github.com/akshatp17/StudyCache"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-ribbon-600 hover:underline font-medium"
                        >
                            GitHub repository
                        </a>.
                    </p>
                </div>

                {/* Right Part */}
                <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2 w-full">
                    <img
                        src={contribute}
                        alt="Contribute to StudyCache"
                        className="w-[90%] md:max-w-full max-w-md object-contain"
                    />
                </div>
            </section>


        </div>
    );
};

export default Home;
