import React from "react";

export interface IJob {
    title: string;
    company: string;
    content: string;
    email: string;
    createdAt: string;
    location: string;
    description?: string;
}

export default function Job(data: IJob) {
    return (
        <>
            <div
                className="m-5 shadow-md py-3 px-10 rounded-lg dark:bg-gray-800"
                style={{ maxWidth: "800px", margin: "20px auto" }}
            >
                <h1 className="font-medium leading-tight text-3xl mt-0">
                    {data.title}
                </h1>
                <span className="text-gray-400">
                    {data.company} ⋄ {data.email}
                </span>
                <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
            </div>
        </>
    );
}
