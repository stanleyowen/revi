import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../utils/components/navbar";
import Footer from "../utils/components/footer";

import enUS from "../locales/en-US.json";
import idID from "../locales/id-ID.json";

const Home: NextPage = () => {
    const { getLanguagePreference } = useAuth();
    const lang: { [key: string]: any } = {
        enUS: enUS.home,
        idID: idID.home,
    };

    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-0 md:py-16 md:grid-cols-12">
                    <div className="mr-auto place-self-center md:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                            {lang[getLanguagePreference()].section1Heading}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {lang[getLanguagePreference()].section1Description}
                        </p>
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            {lang[getLanguagePreference()].section1Button}
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="hidden md:mt-0 md:col-span-5 md:flex">
                        <Image
                            width={600}
                            height={400}
                            alt="FInancial Education"
                            src="https://user-images.githubusercontent.com/69080584/181148624-1a6a0374-6175-4160-a1f6-e824269f5bab.png"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-900 pt-5">
                <div className="mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
                        {lang[getLanguagePreference()].section2Heading1}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        {lang[getLanguagePreference()].section2Description1}
                    </p>
                </div>
                <div className=" mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
                        {lang[getLanguagePreference()].section2Heading2}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        {lang[getLanguagePreference()].section2Description2}
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white text-center pb-4">
                        {lang[getLanguagePreference()].section3Features}
                    </h2>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg
                                    className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Features1
                                }
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Description1
                                }
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg
                                    className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Features2
                                }
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Description2
                                }
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg
                                    className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Features3
                                }
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {
                                    lang[getLanguagePreference()]
                                        .section3Description3
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            {lang[getLanguagePreference()].section4}
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            {lang[getLanguagePreference()].section4Description}
                        </p>
                        <a
                            href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            {lang[getLanguagePreference()].section4Button}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
