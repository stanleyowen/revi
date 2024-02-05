import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from "firebase/firestore";
import Job, { IJob } from "../../utils/components/jobs/job";
import Navbar from "../../utils/components/navbar";
import Footer from "../../utils/components/footer";

export default function SignIn() {
    const [Jobs, setJobs] = useState<IJob[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        // get latest 10 posts from `posts` firestore collection
        getDocs(
            query(collection(getFirestore(), "jobs"), orderBy("createdAt"))
        ).then((snap) => {
            let docs = snap.docs.map((doc) => doc.data());
            setJobs(docs as IJob[]);
            setIsLoading(false);
        });
    }, []);
    useEffect(() => console.log(Jobs), [Jobs]);
    return (
        <>
            <Navbar />
            <div
                className="dark:bg-slate-900 dark:text-slate-300"
                style={{ flex: "1" }}
            >
                {isLoading ? (
                    <div className="flex justify-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    Jobs?.map((element) => {
                        return (
                            <Job
                                key={element.createdAt}
                                title={element.title}
                                content={element.content}
                                email={element.email}
                                createdAt={element.createdAt}
                                company={element.company}
                                location={element.location}
                            />
                        );
                    })
                )}
            </div>
            <Footer />
        </>
    );
}
