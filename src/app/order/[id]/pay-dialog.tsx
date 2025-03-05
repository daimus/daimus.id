'use client'
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import QRCode from "react-qr-code";

export default function PayDialog ({qrCode} : {qrCode : string}){
    const [isPayDialogOpen, setIsPayDialogOpen] = useState(false);

    return (
        <>
            <div className="mt-4">
                <Dialog open={isPayDialogOpen} onOpenChange={setIsPayDialogOpen}>
                    <DialogTrigger className="w-full">
                        <Button className="w-full">
                            Pay
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <div className="p-4">
                                    <QRCode
                                        size={256}
                                        style={{height: "auto", maxWidth: "100%", width: "100%"}}
                                        value={qrCode}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <div className="w-full flex flex-col space-y-4">
                                <Button className="block" variant="secondary" onClick={() => setIsPayDialogOpen(false)}>Close</Button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )

}