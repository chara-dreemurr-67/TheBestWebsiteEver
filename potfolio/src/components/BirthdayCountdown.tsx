import { type JSX, useState, useEffect } from "react";

interface BirthdayProp {
    BirthDay: number,
    BirthMonth: number
}

const BirthdayCountDown = ({ BirthDay, BirthMonth }: BirthdayProp): JSX.Element => {
    const [Now, SetNow] = useState(new Date());

    useEffect((): () => void => {
        const Interval = setInterval((): void => {
            SetNow(new Date());
        }, 1000);

        return (): void => clearInterval(Interval);
    }, []);

    const CurrentYear: number = Now.getFullYear();
    let NextBirthday: Date = new Date(CurrentYear, BirthMonth, BirthDay);

    const TimeSinceBirthday: number = Now.getTime() - NextBirthday.getTime();

    if(TimeSinceBirthday >= 0 && TimeSinceBirthday < 604800000) 
        return <span>🎂 it's my birthday :)</span>;
    
    if(NextBirthday < Now) 
        NextBirthday = new Date(CurrentYear + 1, BirthMonth, BirthDay);

    const Difference: number = NextBirthday.getTime() - Now.getTime();

    const Seconds: number = Math.floor(Difference / 1000) % 60;
    const Minutes: number = Math.floor(Difference / 60000) % 60;
    const Hours: number = Math.floor(Difference / 3600000) % 24;
    const Days: number = Math.floor(Difference / 86400000);

    const Format = (Num: number) => String(Num).padStart(2, "0");
    return (
        <div className="flex flex-col items-center justify-center text-center border-5 border-solid border-white rounded-[5px] h-fit p-[20px]">
            <span>🎂 countdown to my birthday</span>
            <span>{`${Format(Days)}:${Format(Hours)}:${Format(Minutes)}:${Format(Seconds)}`}</span>
        </div>
    );
};

export default BirthdayCountDown;