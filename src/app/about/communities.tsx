type Community = {
    id: number,
    imageUrl: string,
    name: string,
    position: string,
    year: string
}

export default async function Communities (){
    const data = await fetch(`https://raw.githubusercontent.com/daimus/webdata/main/communities.json`)
    const communities : Array<Community>  = await data.json()
    return (
        <>
            <section className="mx-0 mt-10">
                <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
                    <h2 className="md:w-12 flex text-lg font-semibold mr-12 mt-0">
                        <span>Community</span>
                    </h2>
                    <div className="flex flex-col gap-1 w-full mt-0">
                        <h3 className="flex text-lg font-semibold mr-12 mt-0">
                            <span className=" ml-2">
                                Engage within community
                            </span>
                        </h3>

                        <ul role="list" className="divide-y divide-gray-100">
                            {communities.map((experience) => (
                                <li key={experience.id} className="flex items-center justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <img alt="" src={experience.imageUrl}
                                             className="h-12 w-12 flex-none rounded-full bg-gray-50"/>
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6">{experience.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5">{experience.position}</p>
                                        </div>
                                    </div>
                                    <p className="flex-none text-xs">
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