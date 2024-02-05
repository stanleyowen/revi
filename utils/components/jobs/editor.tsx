import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";
import { useAuth } from "../../../context/AuthContext";

import enUS from "../../../locales/en-US.json";
import idID from "../../../locales/id-ID.json";

const JobEditor = () => {
    const { user, getLanguagePreference } = useAuth();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const lang: { [key: string]: any } = {
        enUS: enUS.postJob,
        idID: idID.postJob,
    };

    const createPost = async () => {
        await addDoc(collection(getFirestore(), "jobs"), {
            title,
            email: user.email,
            content: String(stateToHTML(editorState.getCurrentContent())),
            createdAt: new Date().toLocaleDateString(),
            company,
        })
            .then(() => {
                console.log("saved");
                window.location.href = "/jobs/";
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div className="flex justify-end" style={{ margin: "2% 10%" }}>
                <input
                    type="text"
                    name="title"
                    placeholder={lang[getLanguagePreference()].title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div
                className="flex justify-end"
                style={{ margin: "0 10% 2% 10%" }}
            >
                <input
                    type="text"
                    name="title"
                    placeholder={lang[getLanguagePreference()].company}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <Editor
                editorState={editorState}
                onEditorStateChange={(e) => setEditorState(e)}
                wrapperClassName="bg-slate-400"
                toolbarClassName="bg-slate-400"
            />
            <div className="flex justify-end" style={{ margin: "2% 10% 0 0" }}>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => (window.location.href = "/")}
                >
                    {lang[getLanguagePreference()].cancel}
                </button>
                <button
                    onClick={() => createPost()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10"
                >
                    {lang[getLanguagePreference()].post}
                </button>
            </div>
        </>
    );
};
export default JobEditor;
