import ProjectItem from "@/app/project/project-item";
import type {Metadata} from "next";

export type Project = {
    year: string,
    title: string,
    thumbnail: string,
    description: string,
    tags: Array<string>,
    href: string
}

export const metadata: Metadata = {
    title: "Daimus Project"
};

export default async function Project (){
    const data = await fetch(`https://raw.githubusercontent.com/daimus/webdata/main/projects.json`)
    const projects : Array<Project> = await data.json()
    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">Project</h1>
                <ul role="list" className="mx-auto gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                    {
                        projects.map((project, index) => (
                            <ProjectItem key={index} project={project} />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}