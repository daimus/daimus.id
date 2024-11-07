import {cn} from "@/lib/utils";
import Image from "next/image";

export default function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
    const photos = [
        '/images/bike.png',
        '/images/city.jpg',
        '/images/conference.JPG',
        '/images/cafe.JPG',
        '/images/camping.png',
    ]

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {photos.map((image, imageIndex) => (
                    <div
                        key={imageIndex}
                        className={cn(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}