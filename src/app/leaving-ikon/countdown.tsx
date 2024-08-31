 'use client'

 import Countdown from 'react-countdown';

// @ts-ignore
 export default function CountdownTimer({ targetDate }) {
    const CountDownItem = ({timeLeft, unit} : {timeLeft: number, unit: string}) => {
        return (
            <>
                <div className="timer mb-4">
                    <div
                        className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
                        <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
                            {timeLeft}
                        </h3>
                        <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">{unit}</p>
                    </div>
                </div>
            </>
        )
    }

     const renderer = ({days, hours, minutes, seconds, completed} : {days : number, hours: number, minutes: number, seconds: number, completed: boolean}) => {
         return (
             <>
                 <CountDownItem timeLeft={days} unit="days" />
                 <CountDownItem timeLeft={hours} unit="hours" />
                 <CountDownItem timeLeft={minutes} unit="minutes" />
                 <CountDownItem timeLeft={seconds} unit="seconds" />
             </>
         )
    }

     return (
         <div className="flex flex-wrap items-start justify-center w-full gap-1.5 count-down-main text-center">
             <Countdown
                 date={targetDate}
                 renderer={renderer}
             />
         </div>
     );
 }
