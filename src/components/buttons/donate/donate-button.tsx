'use client'

import BaseButton from "@/components/buttons/base-button";
import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer"
import {useState} from "react";
import DonateQrisDialog from "@/components/buttons/donate/donate-qris-dialog";
import {useSearchParams} from "next/navigation";

export default function DonateButton (){
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(!!searchParams.get("donate"));


    return (
        <>
            <BaseButton onClick={() => setIsOpen(true)}>
                Donate
            </BaseButton>

            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerContent>
                    <div className="container max-w-2xl mx-auto space-y-4 py-24">
                        <DonateQrisDialog />
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}