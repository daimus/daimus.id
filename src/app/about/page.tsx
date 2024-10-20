import Experience from "@/app/about/Experience";
import Community from "@/app/about/Community";

export default function AboutPage() {
    return (
        <>
            <h1 className="text-2xl tracking-tight sm:text-xl text-center mt-4">
                Ever wondered how software can change the world? I do. As a software engineer, I&apos;m driven to create
                impactful applications that solve real-world problems.
            </h1>
            <div>
                <div className="columns-2 sm:columns-3 gap-4 mt-6 z-20">
                    <div className=" h-40 w-full relative hidden sm:block mb-4">
                        <img src="/images/bike.png" className=" mt-0 object-cover w-full h-full rounded-lg"/>
                    </div>
                    <div className="h-80 w-full relative hidden sm:block">
                        <img src="/images/kucing.png" className="mt-0 object-cover h-full rounded-lg"/>
                    </div>
                    <div className="h-80  w-full relative mb-4">
                        <img src="/images/lovenature.png" className=" mt-0 object-cover h-full rounded-lg"/>
                    </div>
                    <div className="h-40  w-full relative">
                        <img src="/images/tools.png" className="mt-0 object-cover h-full rounded-lg"/>
                    </div>
                    <div className="h-40 w-full relative mb-4">
                        <img src="/images/camping.png" className="mt-0 object-cover h-full rounded-lg"/>
                    </div>
                    <div className="h-80  w-full relative">
                        <img src="/images/aws.png" className="mt-0 object-cover h-full rounded-lg"/>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-base text-zinc-700 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p className="mt-6 text-base text-zinc-700 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p className="mt-6 text-base text-zinc-700 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <div>
                <Experience/>
            </div>
            <div>
                <Community/>
            </div>
        </>
    )
}