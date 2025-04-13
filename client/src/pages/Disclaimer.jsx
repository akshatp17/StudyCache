import React from 'react';
import terms from '../assets/terms.svg';

const Disclaimer = () => {
    return (
        <div className="flex justify-center items-center gap-10 py-10 px-5 bg-[#f6faff]">
            <section className="flex flex-col py-6 px-8 bg-white shadow-lg rounded-lg gap-8 w-full max-w-[80%]">
                <h1 className="text-4xl font-bold text-center text-[#1266ed]">Disclaimer</h1>
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                    <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed flex-1">
                        <li>
                            All the books and study resources hosted on
                            <span className="text-blue-ribbon-700 font-semibold"> StudyCache </span>
                            are provided for
                            <span className="font-semibold"> informational and educational purposes only</span>.
                            We do not claim ownership of any of the resources available on the website.
                        </li>
                        <li>
                            The books and study materials present on
                            <span className="text-blue-ribbon-700 font-semibold"> StudyCache </span>
                            have been compiled from various sources and are made available on our website as a service to our users.
                            We do not endorse any of the resources or their contents and make no representation or warranties of any kind,
                            express or implied, about the
                            <span className="font-semibold"> completeness, accuracy, reliability, suitability, or availability </span>
                            with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                        </li>
                        <li>
                            Users of
                            <span className="text-blue-ribbon-700 font-semibold"> StudyCache </span>
                            should use their own discretion when accessing or utilizing any of the resources available on the website.
                            We shall not be liable for any
                            <span className="font-semibold"> damages, losses, or expenses </span>
                            arising from the use of the resources on
                            <span className="text-blue-ribbon-700 font-semibold"> StudyCache </span>
                            or from any action taken by the users of the website.
                        </li>
                        <li>
                            By accessing and using
                            <span className="text-blue-ribbon-700 font-semibold"> StudyCache </span>,
                            you acknowledge and agree to this disclaimer and our
                            <span className="font-semibold"> terms of service</span>.
                            If you do not agree with these terms, please do not access or use our website.
                        </li>
                    </ul>
                    <div className="flex justify-center lg:justify-end">
                        <img src={terms} alt="Terms Illustration" className="max-w-full h-auto lg:max-w-sm" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;