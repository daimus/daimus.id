"use client";

import { Wallet, WalletMinimal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogin, usePrivy } from '@privy-io/react-auth';
import { cn } from "@/lib/utils";
import { useFundWallet } from '@privy-io/react-auth';
import { useEffect, useState } from "react";

export default function DonateWalletDialog() {
    const [isJustLoggedIn, setIsJustLoggedIn] = useState(false);
    const { ready, authenticated } = usePrivy();
    const { login } = useLogin();
    const { fundWallet } = useFundWallet();
    const disableLogin = !ready || (ready && authenticated);

    const handleTransfer = async () => {
        await fundWallet(process.env.NEXT_PUBLIC_DESTINATION_WALLET as string);
    }

    const handleLogin = async () => {
        setIsJustLoggedIn(true)
        login({
            loginMethods: ['wallet'],
            walletChainType: 'ethereum-and-solana',
            disableSignup: false
        });
    }

    useEffect(() => {
        if (isJustLoggedIn && authenticated) {
            setIsJustLoggedIn(false);
            handleTransfer();
        }
    }, [isJustLoggedIn, authenticated]);

    return (
        <>
            {
                authenticated ? <Button
                    variant="outline"
                    className={cn(`w-full text-center cursor-pointer`)}
                    onClick={handleTransfer}
                >
                    <WalletMinimal />
                    Transfer
                </Button> :
                    <Button
                        variant="outline"
                        className={cn(`w-full text-center cursor-pointer`, disableLogin && "cursor-not-allowed")}
                        disabled={disableLogin}
                        onClick={() => handleLogin()}
                    >
                        <Wallet />
                        Connect Wallet
                    </Button>
            }
        </>
    )
}