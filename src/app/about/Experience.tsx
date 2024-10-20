
const experiences = [
    {
        id: 2,
        name: 'PT Ikonsultan Inovatama',
        position: 'Software Engineer',
        imageUrl: '/images/ikonsultan_circle.png',
        year: '2021-2023',
    },
    {
        id: 1,
        name: 'IDprogrammer',
        position: 'Software Engineer',
        imageUrl: '/images/idprogrammer_circle.png',
        year: '2023-2024',
    }
]

export default function Experience (){
    return (
        <>
            <section className="mx-0 mt-10">
                <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
                    <h2 className="md:w-12 flex text-lg font-semibold  text-zinc-600 mr-12 mt-0">
                        <span>Work</span>
                    </h2>
                    <div className="flex flex-col gap-1 w-full mt-0">
                        <h3 className="flex text-lg font-semibold  text-zinc-800 mr-12 mt-0">
                            <span className=" ml-2"> 5+ years of professional experience in software development
                            </span>
                        </h3>

                        <ul role="list" className="divide-y divide-gray-100">
                            {experiences.map((experience) => (
                                <li key={experience.id} className="flex items-center justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img alt="" src={experience.imageUrl}
                                             className="h-12 w-12 flex-none rounded-full bg-gray-50"/>
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{experience.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{experience.position}</p>
                                        </div>
                                    </div>
                                    <p className="flex-none text-xs text-gray-600">
                                        <time>{experience.year}</time>
                                    </p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}