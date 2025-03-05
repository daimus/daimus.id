'use client'

import BaseButton from "@/components/buttons/base-button";
import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Contact, Mail, Phone} from "lucide-react";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/linkedin";

export default function ContactButton (){
    const [isOpen, setIsOpen] = useState(false);

    const saveContact = () => {
        const contact = {
            name: "Daimus Suudi",
            phone: "+6287773775774",
            email: "mail@daimus.id"
        };

        const vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        const newLink = document.createElement('a');
        newLink.download = contact.name + ".vcf";
        newLink.textContent = contact.name;
        newLink.href = url;

        newLink.click();
    }
    return (
        <>
            <BaseButton onClick={() => setIsOpen(true)}>
                Contact
            </BaseButton>

            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerContent>
                    <div className="container max-w-2xl mx-auto py-24">
                        <div className="mb-6 flex h-full w-full items-center">
                            <div className="mr-3 flex h-6 w-6 items-center justify-center text-black">
                                <Phone className="dark:text-white" />
                            </div>
                            <div>
                                <div className="mb-3">
                                    <p className="font-semibold leading-normal">
                                        +62 87-773-775-774
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex h-full w-full items-center">
                            <div className="mr-3 flex h-6 w-6 items-center justify-center text-black">
                                <Mail className="dark:text-white"/>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <Link href="mailto:mail@daimus.id"
                                          className="font-semibold leading-normal hover:text-emerald-500">
                                        mail@daimus.id
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex h-full w-full items-center">
                            <div className="mr-3 flex h-6 w-6 items-center justify-center text-black">
                                <LinkedinIcon />
                            </div>
                            <div>
                                <div className="mb-3">
                                    <Link href="https://linkedin.com/in/daimus"
                                          className="font-semibold leading-normal hover:text-emerald-500">
                                        in/daimus
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full text-center cursor-pointer" onClick={saveContact}>
                            <Contact/>
                            Save Contact
                        </Button>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}