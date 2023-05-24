import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import Link from "next/link";
import {ArrowUpRightIcon} from "@heroicons/react/20/solid";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <section className="max-w-lg text-gray-50">
                <h1 className="font-bold text-3xl font-serif">Daimus Suudi</h1>
                <p className="my-5 text-justify">
                    Hi 👋, I&apos;m <span className="p-1 px-2 rounded bg-gray-900 font-medium">Daimus</span>. I&apos;m <span className="p-1 px-2 rounded bg-gray-900 font-medium"> Fullstack Developer <span className="font-extrabold">@</span>IDprogrammer</span>. I have a deep passion for technology and a strong background in computer science, allowing me to create software solutions that meet the needs of businesses and users alike.
                </p>
                <div className="flex flex-col md:flex-row">
                    <div>
                        <Image src="/profile.jpg" alt="Daimus Suudi" width={200} height={200} className="rounded-full w-24 h-24" />
                    </div>
                    <div className="md:border-l md:mx-4 border-gray-700">
                        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2">
                            <span className="flex items-center gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-100"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
                                Jakarta, Indonesia
                            </span>
                            <Link rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/daimus" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-100"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>
                                in/daimus
                            </Link>
                            <Link rel="noopener noreferrer" target="_blank" href="https://github.com/daimus" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-100"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
                                daimus
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="my-5 text-justify">
                    Throughout my career, I have developed a wide range of technical skills, including proficiency in multiple programming languages, database management, software architecture, and project management.
                </p>
                <p className="my-5 text-justify">
                    My experience has also taught me the importance of effective communication and collaboration. I am a skilled communicator who is able to translate technical concepts to non-technical stakeholders, and I thrive in team environments, where I can collaborate with others to deliver high-quality software solutions.
                </p>
                <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-400 dark:text-neutral-400">
                    <li>
                        <Link className="flex items-center hover:text-neutral-100 dark:hover:text-neutral-200 transition-all" href="mailto:business@daimus.id">
                            <ArrowUpRightIcon className="h-6 w-6 mr-1" />
                            <p className="h-7">send me e-mail</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center hover:text-neutral-100 dark:hover:text-neutral-200 transition-all" href="tel:6287773775774">
                            <ArrowUpRightIcon className="h-6 w-6 mr-1" />
                            <p className="h-7">make a call</p>
                        </Link>
                    </li>
                </ul>
            </section>

        </>
    )
}
