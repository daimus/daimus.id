import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";
import {Project} from "@/app/project/page";

export default function ProjectItem ({project} : {project : Project}){
    return (
        <>
            <li>
                <div className="flex space-x-12">
                    <div className="hidden md:block">
                        <span className="text-lg/8 font-semibold">{project.year}</span>
                    </div>
                    <div className="flex-1">
                        <Link href={project.href}>
                            <h3 className="text-lg/8 font-semibold hover:text-emerald-500">
                                <span className="md:hidden mr-2">[{project.year}]</span>{project.title}
                            </h3>
                            <Image alt={project.title} src={project.thumbnail} width={1280} height={720}
                             className="mt-4 aspect-[16/9] w-full rounded-2xl object-cover"/>
                        </Link>
                        <ul role="list" className="mt-4 flex flex-wrap gap-x-2">
                            {
                                project.tags.map((tag, index) => (
                                    <li key={index}>
                                        <Badge>{tag}</Badge>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="mt-4 text-base/7 text-justify">{project.description}</p>
                        <div className="mt-2">
                            <Link href={project.href} className="font-semibold text-emerald-500">
                                Read Case Study <ArrowRight className="inline"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}