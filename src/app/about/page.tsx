import Experience from "@/app/about/Experience";
import Community from "@/app/about/Community";
import Photos from "@/app/about/Photos";

export default function AboutPage() {
    return (
        <>
            <section className="container max-w-3xl mx-auto">
                <h1 className="text-2xl tracking-tight sm:text-xl text-center mt-4">
                    Ever wondered how software can change the world? I do. As a software engineer, I&apos;m driven to
                    create
                    impactful applications that solve real-world problems.
                </h1>
            </section>
            <div>
                <Photos/>
            </div>
            <section className="container max-w-3xl mx-auto">
                <p className="mt-6 text-base text-zinc-700 text-justify">
                    Hi, I’m Daimus, a Software Engineer from Indonesia with a foundation in Informatics Engineering, which has equipped me with a balanced skill set in software architecture, backend and frontend development, system optimization, and delivering scalable, maintainable solutions aligned with business needs. For over four years, I’ve built my expertise working across various industries.
                </p>
                <p className="mt-6 text-base text-zinc-700 text-justify">
                    My career journey began with a focus on software development during college. I worked as a software engineer at IDprogrammer until 2023, I engineered high-performance, SEO-optimized websites focused on efficiency and profitability, delivering solutions that drive traffic, enhance user engagement, and boost revenue. Later, at IKON , I was part of the Wealth Squad on one of largest bank where I developed robust, scalable backend systems and optimized performance and accessibility for Mobile Banking App.
                </p>
                <p className="mt-6 text-base text-zinc-700 text-justify">
                    For me, software engineering is a continuous journey of problem-solving and innovation. Much like navigating uncharted territory, it’s a field that demands resilience, adaptability, and a passion for learning to achieve meaningful impact.
                </p>
                <div>
                    <Experience/>
                </div>
                <div>
                    <Community/>
                </div>
            </section>
        </>
    )
}