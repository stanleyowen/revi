import dynamic from "next/dynamic";
import Navbar from "../../utils/components/navbar";

const BlogEditor = dynamic(() => import("../../utils/components/blog/editor"), {
    ssr: false,
});

export default function write() {
    return (
        <>
            <Navbar />
            <div
                className="dark:bg-slate-800"
                style={{
                    height: "100%",
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <BlogEditor />
            </div>
        </>
    );
}
