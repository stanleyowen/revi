import { signInAnonymously } from "firebase/auth";
import {
    collection,
    getDocs,
    getFirestore,
    orderBy,
    query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Blogs, { IBlog } from "../../utils/components/blog/blogs";
import Footer from "../../utils/components/footer";
import Navbar from "../../utils/components/navbar";

export default function Articles() {
    const [Articles, setArticles] = useState<IBlog[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { getLanguagePreference } = useAuth();
    useEffect(() => {
        // get latest 10 posts from `posts` firestore collection
        getDocs(
            query(collection(getFirestore(), "posts"), orderBy("createdAt"))
        ).then((snap) => {
            let docs = snap.docs
                .map((doc) => {
                    // trim the content to only show the first 40 words
                    let content = doc.data().content;
                    let splitted_content = content.split(" ");
                    content =
                        splitted_content.length > 40
                            ? splitted_content
                                  .slice(0, 40)
                                  .join(" ")
                                  .concat("...")
                            : splitted_content;

                    return Object.assign(doc.data(), {
                        id: doc.id,
                        content,
                        lang: doc.data().lang,
                    });
                })
                .sort((a, b) => {
                    return a.lang === getLanguagePreference() ? -1 : 1;
                });
            setArticles(docs as IBlog[]);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => console.log(Articles), [Articles]);

    return (
        <>
            <Navbar />
            <div
                className="dark:bg-slate-900 dark:text-slate-300"
                style={{ flex: "1" }}
            >
                <div style={{ maxWidth: "800px", margin: "auto" }}>
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
                        Articles?.map((element) => {
                            return (
                                <Blogs
                                    id={element.id}
                                    key={element.id}
                                    title={element.title}
                                    content={element.content}
                                    email={element.email}
                                    createdAt={element.createdAt}
                                    lang={element.lang}
                                />
                            );
                        })
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
