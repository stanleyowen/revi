import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../utils/components/navbar";
import { Alert, LoadingAnimate } from "./api/icons";

import enUS from "../locales/en-US.json";
import idID from "../locales/id-ID.json";

export default function SignUp() {
    const { signUp, getLanguagePreference } = useAuth();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<{
        email: string;
        password: string;
        confirmPassword: string;
    }>({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const lang: { [key: string]: any } = {
        enUS: enUS.register,
        idID: idID.register,
    };

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const SignUp = async () => {
        setLoading(true);

        if (data.password !== data.confirmPassword)
            setError("Passwords do not match");
        else
            try {
                await signUp(data);
                window.location.href = "/";
            } catch (e: any) {
                if (
                    e.code === "auth/user-not-found" ||
                    e.code === "auth/wrong-password"
                )
                    setError("Invalid credentials. Please try again.");
                else if (e.code === "user-token-expired")
                    setError("Your session has expired. Please sign in again.");
                else if (e.code === "auth/email-already-in-use")
                    setError("Email already in use. Please try again.");
                else setError(e.message);
            }

        setTimeout(() => setLoading(false), 100);
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
                                    {error && (
                                        <div
                                            role="alert"
                                            className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                                        >
                                            <Alert />
                                            <div>
                                                <span className="font-medium">
                                                    {error}
                                                </span>{" "}
                                            </div>
                                        </div>
                                    )}
                                    <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                                        {lang[getLanguagePreference()].section1}
                                    </h1>
                                    <p className="mb-3 text-gray-500 dark:text-gray-400">
                                        {
                                            lang[getLanguagePreference()]
                                                .section1Description
                                        }
                                    </p>
                                    <form className="mt-8 space-y-6">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {
                                                    lang[
                                                        getLanguagePreference()
                                                    ].emailAddress
                                                }
                                            </label>
                                            <input
                                                autoFocus
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder={
                                                    lang[
                                                        getLanguagePreference()
                                                    ].emailAddress
                                                }
                                                value={data.email}
                                                onChange={handleData}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {
                                                    lang[
                                                        getLanguagePreference()
                                                    ].password
                                                }
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder={
                                                    lang[
                                                        getLanguagePreference()
                                                    ].password
                                                }
                                                value={data.password}
                                                onChange={handleData}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="confirmPassword"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {
                                                    lang[
                                                        getLanguagePreference()
                                                    ].confirmPassword
                                                }
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder={
                                                    lang[
                                                        getLanguagePreference()
                                                    ].confirmPassword
                                                }
                                                value={data.confirmPassword}
                                                onChange={handleData}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                        <button
                                            disabled={isLoading}
                                            onClick={() => SignUp()}
                                            className="block border-0 w-1/4 bg-slate-400/10 text-white px-4 py-1 rounded-md
          hover:bg-slate-400/20
          disabled:opacity-50 disabled:cursor-not-allowed disabled:inline-flex disabled:items-center"
                                        >
                                            {isLoading && (
                                                <LoadingAnimate className="inline w-4 h-4 mr-3 text-white animate-spin" />
                                            )}
                                            {
                                                lang[getLanguagePreference()]
                                                    .section2Button
                                            }
                                        </button>
                                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {
                                                lang[getLanguagePreference()]
                                                    .login1
                                            }
                                            <Link
                                                className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
                                                href="/login"
                                            >
                                                {
                                                    lang[
                                                        getLanguagePreference()
                                                    ].login2
                                                }
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
