import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    return (
        <>
            <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
                <div className="lg:sticky lg:top-20">
                    <div
                        className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                        <Link aria-label="Lee Robinson" href="/">
                            <Image src="/logo.png" alt="logo" height={50} width={50} />
                        </Link>
                    </div>
                    <nav className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
                        <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                            <Link href="/"
                                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] font-bold">Home</Link>
                            <Link href="/project"
                                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] font-bold">Project</Link>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar