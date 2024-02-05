import React from "react";

export interface IBlog {
    title: string;
    content: string;
    email: string;
    createdAt: string;
    modifiedAt?: string;
    id: string;
    lang: string;
}

export default function Blogs(data: IBlog) {
    return (
        <div
            className={
                "m-5 rounded-lg pt-3 pb-6 px-10 shadow cursor-pointer dark:bg-gray-800"
            }
            onClick={() => (window.location.href = `/posts/${data.id}`)}
        >
            <h1 className="font-medium leading-tight text-4xl mt-0">
                {data.title}
            </h1>
            <span className="text-gray-400">
                {data.email} ⋄ {data.modifiedAt ?? data.createdAt}
            </span>
            <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
        </div>
    );
}
