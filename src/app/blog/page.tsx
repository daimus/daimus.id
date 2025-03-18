import type {Metadata} from "next";
import BlogItem from "@/app/blog/blog-item";

export type Article = {
    type_of: string;
    id: number;
    title: string;
    description: string;
    published: boolean;
    published_at: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    page_views_count: number;
    published_timestamp: string;
    body_markdown: string;
    positive_reactions_count: number;
    cover_image: string | null;
    tag_list: string[];
    tags: string[];
    canonical_url: string;
    reading_time_minutes: number;
    user: {
        name: string;
        username: string;
        twitter_username: string | null;
        github_username: string | null;
        user_id: number;
        website_url: string;
        profile_image: string;
        profile_image_90: string;
    };
};

export const metadata: Metadata = {
    title: "Daimus Blog"
};
export default async function BlogPage (){
    const myHeaders = new Headers();
    myHeaders.append("api-key", process.env.DEVTO_API_KEY || '');

    const myRequest = new Request(`https://dev.to/api/articles/me/published`, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });

    const data : Array<Article> = await fetch(myRequest)
        .then((response) => response.json())
        .catch((error) => console.error(error));

    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">Blog</h1>
                <ul role="list" className="mx-auto gap-x-6 gap-y-24 space-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                    {
                        data.map((article, index) => (
                            <BlogItem article={article} key={index} />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}