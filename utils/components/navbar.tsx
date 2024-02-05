import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

import enUS from "../../locales/en-US.json";
import idID from "../../locales/id-ID.json";

export default function Navbar() {
    const { user, getLanguagePreference } = useAuth();
    const lang: { [key: string]: any } = {
        enUS: enUS.navbar,
        idID: idID.navbar,
    };

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-700 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a className="flex items-center">
                        <span className="mr-3 h-6 sm:h-9">
                            <Image
                                src="/edufin.png"
                                alt="Edufin Logo"
                                width={36}
                                height={36}
                            />
                        </span>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Edufin
                        </span>
                    </a>
                </Link>
                <div className="flex md:order-2">
                    {user ? (
                        <>
                            <Link href={"/logout"}>
                                <button
                                    type="button"
                                    className="text-dark dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 hover:text-slate-400"
                                >
                                    {lang[getLanguagePreference()].signOut}
                                </button>
                            </Link>
                            <Link href={"/posts/write"}>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {lang[getLanguagePreference()].writeArticle}
                                </button>
                            </Link>
                            <Link href={"/jobs/write"}>
                                <button
                                    type="button"
                                    className="text-dark dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 hover:text-slate-400"
                                >
                                    {lang[getLanguagePreference()].postJob}
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={"/login"}>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {lang[getLanguagePreference()].signIn}
                                </button>
                            </Link>
                            <Link href={"/register"}>
                                <button
                                    type="button"
                                    className="text-dark dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 hover:text-slate-400"
                                >
                                    {lang[getLanguagePreference()].signUp}
                                </button>
                            </Link>
                        </>
                    )}
                    <button
                        data-collapse-toggle="mobile-menu-4"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-4"
                        aria-expanded="false"
                        onClick={() =>
                            document
                                .getElementById("mobile-menu-4")
                                ?.classList.toggle("hidden")
                        }
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-4"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <Link href="/" aria-current="page">
                                {lang[getLanguagePreference()].home}
                            </Link>
                        </li>
                        <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <Link href="/posts/articles">
                                {lang[getLanguagePreference()].articles}
                            </Link>
                        </li>
                        <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <Link href="/jobs">
                                {lang[getLanguagePreference()].jobs}
                            </Link>
                        </li>
                        <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <Link href="/financial-class">
                                {lang[getLanguagePreference()].financialClass}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
