import React from 'react'
import helloimage from '../assets/hello.svg';
import dsce from '../assets/dsce.png';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-5 px-3'>
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
        </div>
    )
}

export default Home
