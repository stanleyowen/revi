import React, { createContext, useContext, useEffect, useState } from "react";
import {
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const getLanguagePreference = () => {
        const languagesPreference = localStorage.getItem("languagesPreference");
        if (languagesPreference) return languagesPreference;
        else return "idID";
    };

    const setLanguagePreference = (language: string) => {
        localStorage.setItem("languagesPreference", language);
        return window.location.reload();
    };

    const signUp = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const resetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = async () => {
        setUser(null);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signUp,
                resetPassword,
                logOut,
                getLanguagePreference,
                setLanguagePreference,
            }}
        >
            {isLoading ? null : children}
        </AuthContext.Provider>
    );
};
