import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";
import { useSearchParams } from "next/navigation";

export default function DonateQrisDialog() {
    const searchParams = useSearchParams();

    return (
        <>
            <Dialog defaultOpen={searchParams.get("donate") === "qris"}>
                <DialogTrigger className="w-full">
                    <Button variant="outline" className="w-full text-center cursor-pointer">
                        <QrCode />
                        QRIS
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <div className="mt-8 bg-white text-black">
                        <div className="p-4">
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={process.env.NEXT_PUBLIC_QRIS_CODE || ""}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}