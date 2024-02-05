import Link from "next/link";
import Footer from "../utils/components/footer";
import Navbar from "../utils/components/navbar";

import enUS from "../locales/en-US.json";
import idID from "../locales/id-ID.json";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
    const { getLanguagePreference } = useAuth();
    const lang: { [key: string]: any } = {
        enUS: enUS.financialClass,
        idID: idID.financialClass,
    };

    return (
        <>
            <Navbar />
            <div className="dark:bg-slate-900 dark:text-slate-400">
                <div className="mx-auto container flex items-center" id="nav">
                    <div className="w-full pt-2 p-4">
                        <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
                            <div className="justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-sm xl:p-0 dark:bg-gray-800">
                                <div className="p-6 w-full sm:p-8 lg:p-10">
                                    <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                                        Woops!
                                    </h1>
                                    <p className="mb-3 text-gray-500 dark:text-gray-400">
                                        {
                                            lang[getLanguagePreference()]
                                                .description
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
