 'use client'

import { useEffect, useState } from 'react';

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div className="timer" key={interval}>
                <div
                    className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                    <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
                        {timeLeft[interval]}
                    </h3>
                    <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">{interval}{" "}</p>
                </div>
            </div>
    )
        ;
    });

    return (

            <div className="flex items-start justify-center w-full gap-1.5 count-down-main text-center">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
    );
}
