import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../utils/components/navbar";
import { LoadingAnimate } from "./api/icons";

export default function SignIn() {
    const { logOut } = useAuth();

    useEffect(() => {
        try {
            logOut();
            window.location.href = "/login";
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <>
            <Navbar />
            <div className="dark:bg-slate-800 dark:text-slate-400 min-h-screen">
                <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto container-dialog back bg-slate-500/10">
                    <div className="space-x-4">
                        <div className="space-y-2">
                            <LoadingAnimate className="m-auto w-8 h-8 text-white animate-spin" />
                            <div className="p-2 text-center">Logging out</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
