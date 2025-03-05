import Markdown from 'react-markdown'
import {notFound} from "next/navigation";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Daimus Project"
};

export default async function ProjectDetailPage({params}: { params: Promise<{ slug: string }> }) {
    const data = await fetch(`https://raw.githubusercontent.com/daimus/projects/main/${(await params).slug}.md`);
    if (!data.ok) {
        return notFound();
    }
    const markdown = await data.text()
    return (
        <>
            <div className="prose dark:prose-invert">
                <Markdown>{markdown}</Markdown>
            </div>
        </>
    )
}