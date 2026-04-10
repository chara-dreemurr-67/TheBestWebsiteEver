import { type JSX, useState, useEffect } from "react";

const Clock = (): JSX.Element => {
    const [Now, SetNow] = useState(new Date());

    useEffect((): () => void => {
        const Interval = setInterval((): void => {
            SetNow(new Date());
        }, 1000);

        return (): void => clearInterval(Interval);
    }, []);

    const TimeString: string = Now.toLocaleString("en-GB", {
        timeZone: "Asia/Ho_Chi_Minh",
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    return (
        <div className="flex flex-col items-center justify-center text-center border-5 border-solid border-white rounded-[5px] h-fit p-[20px]">
            <span>🕛 it's currently</span>
            <span>{TimeString}</span>
            <span>in Vietnam</span>
        </div>
    );
};

export default Clock;