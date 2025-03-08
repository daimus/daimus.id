'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {House, Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";

const menu = [
    {
        title: "Project",
        path: "/project",
    },
    {
        title: "About",
        path: "/about",
    }
];

export default function Navbar (){
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <>
            <header className="sticky top-0 backdrop-blur-xl py-2 z-50">
                <nav className="px-4 md:px-0 py-2 max-w-2xl mx-auto flex justify-between items-center">
                    <div className="w-full flex justify-between gap-4">
                        <ul className="flex items-center font-medium text-sm text-zinc-600 dark:text-zinc-400">
                            <li>
                                <Link href={'/'}
                                      className={cn(`text-zinc-800 dark:text-zinc-300 hover:text-emerald-600 sm:px-4 sm:py-2 px-3 py-2 rounded-full bg-transparent`, pathname == '/' && `dark:text-gray-100 bg-zinc-200/50 dark:bg-zinc-800`)}
                                >
                                    <House className="inline h-5 w-5" />
                                </Link>
                            </li>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path}
                                          className={cn(`text-zinc-800 dark:text-zinc-300 font-semibold hover:text-emerald-600 sm:px-4 sm:py-2 px-3 py-2 rounded-full bg-transparent`, pathname == item.path && `dark:text-gray-100 bg-zinc-200/50 dark:bg-zinc-800`)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            {
                                theme === "dark" ? <Button onClick={() => setTheme("light")} variant="outline" size="icon"
                                                           className="cursor-pointer">
                                    <Moon className="fill-white"/>
                                </Button> : <div>
                                    <Button onClick={() => setTheme("dark")} variant="outline" size="icon"
                                            className="cursor-pointer">
                                        <Sun className="fill-black"/>
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}