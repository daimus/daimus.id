import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {ArrowRight, Calendar, Clock9} from "lucide-react";
import {Article} from "@/app/blog/page";

export default function BlogItem ({article} : {article : Article}){
    return (
        <>
            <li>
                <div className="flex-1 space-y-2">
                    <ul role="list" className="flex flex-wrap gap-x-2">
                        <li>
                            <Badge variant="secondary"><Calendar/> {new Date(article.published_at).toDateString()}</Badge>
                        </li>
                        <li>
                            <Badge variant="secondary"><Clock9/> {article.reading_time_minutes} minutes</Badge>
                        </li>
                    </ul>
                    <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-lg/8 font-semibold hover:text-emerald-500">
                        {article.title}
                        </h3>
                    </Link>
                    <ul role="list" className="flex flex-wrap gap-x-2">
                        {
                            article.tag_list.map((tag, index) => (
                                <li key={index}>
                                    <Badge>{tag}</Badge>
                                </li>
                            ))
                        }
                    </ul>
                    <p className="text-base/7 text-justify">
                        {article.description}
                        <Link href={`/blog/${article.slug}`} className="font-semibold text-sm ml-2 text-emerald-500">
                            Read More <ArrowRight className="inline w-4 h-4"/>
                        </Link>
                    </p>
                </div>
            </li>
        </>
)
}