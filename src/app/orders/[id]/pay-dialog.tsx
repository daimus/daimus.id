'use client'
import {useRef, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import {cn, formatter} from "@/lib/utils";
import {Send, Smartphone, SquareCheckBig} from "lucide-react";

export default function PayDialog ({qrCode, totalAmount} : {qrCode : string, totalAmount: number}){
    const [isPayDialogOpen, setIsPayDialogOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const captureRef = useRef(null);
    const handleDownload = () => {
        // Temporarily show the element
        setIsHidden(false);

        // Allow the browser to render the element before capturing it
        setTimeout(() => {
            const element: any = captureRef.current;

            // Use html2canvas to capture the element as an image
            html2canvas(element).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");

                // Create a download link
                const link = document.createElement("a");
                link.href = imgData;
                link.download = `daimuslab-qris.png`;

                // Simulate a click to trigger the download
                link.click();

                // Hide the element again after capture
                setIsHidden(true);
            });
        }, 0); // Delay to ensure rendering is updated before capture
    };

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
                                <div>
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
                                {/*<Button className="block" onClick={handleDownload}>Download</Button>*/}
                                <Button className="block" variant="secondary" onClick={() => setIsPayDialogOpen(false)}>Close</Button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className={cn('bg-gradient-to-r from-red-200 to-orange-100 p-8', isHidden ? 'hidden' : 'block mt-96')} ref={captureRef}>
                <div className="border-2 border-white rounded p-8">
                    <div className="flex justify-between p-2">
                        <img src="/images/qris.png" alt="qris" className="block h-12" />
                        <img src="/images/gpn.svg" alt="qris" className="block h-16" />
                    </div>
                    <div className="mb-6 border-b-2 border-white p-2">
                        <p className="text-center font-bold text-3xl">DAIMUS LAB</p>
                        <p className="text-center font-normal text-xl mt-2">TOTAL AMOUNT: {formatter.format(totalAmount)}</p>
                    </div>
                    <div className="mt-4 bg-white p-2 rounded">
                        <QRCode
                            size={256}
                            style={{height: "auto", maxWidth: "100%", width: "100%"}}
                            value={qrCode}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <div className="mt-8">
                        <p className="text-center font-semibold mb-4">
                            HOW TO PAY WITH QRIS
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex justify-center flex-col items-center">
                                <div className="p-2 bg-gray-500 rounded-full w-12 h-12">
                                    <Smartphone className="text-white h-8 w-8"/>
                                </div>
                                <p className="text-center">
                                    Open App with QRIS Logo
                                </p>
                            </div>
                            <div className="flex justify-center flex-col items-center">
                                <div className="p-2 bg-gray-500 rounded-full w-12 h-12">
                                    <SquareCheckBig className="text-white h-8 w-8"/>
                                </div>
                                <p className="text-center">
                                    Scan & Check
                                    <br/> &nbsp;
                                </p>
                            </div>
                            <div className="flex justify-center flex-col items-center">
                                <div className="p-2 bg-gray-500 rounded-full w-12 h-12">
                                    <Send className="text-white h-8 w-8"/>
                                </div>
                                <p className="text-center">
                                    Pay
                                    <br/> &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}