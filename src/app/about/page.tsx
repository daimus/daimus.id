import Experiences from "@/app/about/experiences";
import Communities from "@/app/about/communities";
import Markdown from "react-markdown";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Daimus"
};

export default async function AboutPage (){
    const data = await fetch(`https://raw.githubusercontent.com/daimus/projects/main/about.md`);
    const markdown = await data.text()
    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">About Me</h1>
                <div className="prose dark:prose-invert">
                    <Markdown>{markdown}</Markdown>
                </div>
            </div>
            <Experiences/>
            <Communities/>
        </>
    )
}