import Image from "next/image";
import BaseButton from "@/components/buttons/base-button";
import Link from "next/link";
import ContactButton from "@/components/buttons/contact-button";
import DonateButton from "@/components/buttons/donate/donate-button";
import {Suspense} from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full text-center mt-12">
          <Image src="/images/daimus.jpg" alt="daimus suudi" width={200} height={200} className="rounded-full w-24 h-24" />
        <h1 className="font-semibold text-2xl">Daimus Suudi</h1>
        <p className="text-base">
            Engineering Code, Cultivating Life
        </p>
      </div>
        <div className="w-full flex flex-col justify-center items-center space-y-4 mt-12">
            <Link href={"/about"} className="block w-full">
                <BaseButton>
                    About
                </BaseButton>
            </Link>
            <Link href={"/project"} className="block w-full">
                <BaseButton>
                    Project
                </BaseButton>
            </Link>
            <Link href={"/blog"} className="block w-full">
                <BaseButton>
                    Blog
                </BaseButton>
            </Link>
            <ContactButton />
            <Suspense>
                <DonateButton />
            </Suspense>
        </div>
    </>
  );
}
