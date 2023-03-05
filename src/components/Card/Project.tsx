import IProject from "@/types/IProject";
import Link from "next/link";
import {PlayIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface ProjectProps {
    project: IProject
}

const Project = ({project}: ProjectProps) => {
    return (
        <>
            <div className="rounded-md overflow-hidden flex flex-col border border-gray-700">
                <div
                    className="transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block cursor-pointer">
                    <div className="relative h-full overflow-hidden">
                        <div aria-hidden="true" className="w-full pb-48"/>
                        <Image src={`/images/projects/${project.slug}/thumbnail.jpg`} alt={project.name} width={200} height={100}
                             className="absolute top-0 left-0 w-full h-full object-cover object-center"/></div>
                </div>
                <div className="p-6 flex-1 ">
                    <div className="mb-3"><a href="#"
                                             className="flex flex-row items-center hover:text-red-600">
                        <h3 className="text-xl">{project.name}</h3></a></div>
                    <div className="mb-3 font-light"><p
                        className="line-clamp-3">{project.description}</p></div>
                    <div>
                        <div>
                            <ul className="flex flex-row flex-wrap">
                                {
                                    project.tags.map(tag => <li className="flex flex-row items-center last:mr-0 mr-2 mb-2" key={tag}>
                                        <span className="inline-block bg-gray-900 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">{tag}</span>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-6">
                    <div className="flex flex-row items-center">
                        {
                            project.demoUrl && <Link href={project.demoUrl} target="_blank" className="flex flex-row items-center bg-gray-900 fill-white mr-4 py-2 px-3 rounded shadow-sm border border-solid border-gray-600">
                                <PlayIcon className="w-6 h-6" />
                                <span className="w-2"/>
                                Demo
                            </Link>
                        }
                        {
                            project.repositoryUrl && <Link href={project.repositoryUrl} target="_blank" className="flex flex-row items-center bg-gray-900 fill-white mr-4 py-2 px-3 rounded shadow-sm border border-solid border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/>
                                </svg>
                                <span className="w-2"/>
                                Source Code
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project