import {Article} from "@/app/blog/page";
import Markdown from "react-markdown";
import {Badge} from "@/components/ui/badge";
import {Calendar, Clock9} from "lucide-react";

export default async function BlogDetailPage ({params}: { params: Promise<{ slug: string }> }){
    const myHeaders = new Headers();
    myHeaders.append("api-key", process.env.DEVTO_API_KEY || '');

    const myRequest = new Request(`https://dev.to/api/articles/daimus/${(await params).slug}`, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });

    const article : Article = await fetch(myRequest)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    return (
        <>
            <div className="space-y-4">
                <ul role="list" className="flex flex-wrap gap-x-2">
                    <li>
                        <Badge variant="secondary"><Calendar/> {new Date(article.published_at).toDateString()}</Badge>
                    </li>
                    <li>
                        <Badge variant="secondary"><Clock9/> {article.reading_time_minutes} minutes</Badge>
                    </li>
                </ul>
                <h1 className="text-2xl font-bold">{article.title}</h1>
                <ul role="list" className="flex flex-wrap gap-x-2">
                    {
                        article.tags.map((tag, index) => (
                            <li key={index}>
                                <Badge>{tag}</Badge>
                            </li>
                        ))
                    }
                </ul>
                <div className="prose dark:prose-invert">
                    <Markdown>{article.body_markdown}</Markdown>
                </div>
            </div>
        </>
    )
}