import type { JSX } from "react";
import React, { useEffect, useState } from "react";

interface BirthdayProp {
    BirthDay: number,
    BirthMonth: number
}

interface LinkProp {
    children: React.ReactNode, 
    ResourceName?: string, 
    Href?: string, 
    Title?: string,
    ClassName?: string,
    ID?: string
}

interface AgeProp {
    BirthDate: Date
}

const Age = ({ BirthDate }: AgeProp): JSX.Element => {
    const [Now, SetNow] = useState(new Date());

    useEffect((): () => void => {
        const Interval = setInterval((): void => {
            SetNow(new Date());
        }, 1000);

        return (): void => clearInterval(Interval);
    }, []);

    const Years: number = Now.getFullYear() - BirthDate.getFullYear();
    const HasHadAnniversary: boolean = Now.getMonth() > BirthDate.getMonth() || 
        (Now.getMonth() === BirthDate.getMonth() && Now.getDate() >= BirthDate.getDate())
    ;
    
    return <span>{HasHadAnniversary ? Years : Years - 1}</span>;
};

const RenderColor = (...Items: [string, string][]): JSX.Element => {
    if(Items.length === 1) {
        const [Text, Color]: [string, string] = Items[0];
        return (
            <span 
                className="transition-colors duration-[.3s] hover:text-[color:var(--hover-color)]" 
                style={
                    {
                        "--hover-color": Color
                    } as React.CSSProperties
                }
            >
                {Text}
            </span>
        );
    }

    return (
        <span className="group">
            {Items.map(([Text, Color]: [string, string], Index: number): JSX.Element => (
                <span
                    key={Index}
                    className="transition-colors duration-[.3s] group-hover:text-[color:var(--hover-color)]"
                    style={
                        {
                            "--hover-color": Color
                        } as React.CSSProperties
                    }
                >
                    {Text}
                </span>
            ))}
        </span>
    );
};

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

const Link = ({ children, ResourceName = undefined, Href = undefined, Title = undefined, ClassName = undefined, ID = undefined }: LinkProp): JSX.Element => {
    const Open = (): void => {
        if(Href) {
            window.open(Href, "blank_");
        }
    };

    return (
        <>
            {ResourceName ? <img 
                src={`${ResourceName}`} 
                className={`h-[1em] w-fit${Href ? " hover:cursor-pointer" : ""}`} 
                title={Title} 
                onClick={Open}
            /> : <></>}
            <span 
                className={`w-fit${Href ? " hover:cursor-pointer" : ""} ${ClassName}`} 
                title={Title} 
                onClick={Open}
                id={ID}
            >{children}</span>
        </>
    );
};

const App = (): JSX.Element => 
    <div id="main" className="flex flex-col items-center justify-center gap-[10px] text-[1.5em] font-serif">
        <div className="w-fit h-fit text-center border-5 border-solid border-white rounded-[5px] px-[20px]"><p>welcome to the most 🚰 portfolio ever</p></div>
        <div className="border-5 border-solid border-white rounded-[5px] px-[20px]">
            <p>&nbsp;🇻🇳&nbsp; Vietnamese</p>
            <p>🌙 <Age BirthDate={new Date(2007, 0, 1, 0, 0, 0, 0)} /> years old</p>
            <p>🚰 Claire Iidea | i could be male, i could be female, why care? pronoun doesn't matter to me anyway</p>
            <p>🔖 game developer using {" "}
                <Link Href="https://godotengine.org/" ClassName="text-[rgb(180,180,180)]">
                    Godot Engine
                </Link> {" "}
                Mono (basically {RenderColor(["C#", "rgb(131, 104, 224)"])} version of {" "}
                <Link Href="https://godotengine.org/" ClassName="text-[rgb(180,180,180)]"> 
                    Godot Engine
                </Link> {" "}
                because i fucking hate gdscript)
            </p>
            <p>💯 i know:{" "}
                {RenderColor(["Type", "rgb(55, 124, 200)"])}/{RenderColor(["JavaScript", "rgb(240, 220, 85)"])}{" | "}
                {RenderColor(["C#", "rgb(131, 104, 224)"])}{" | "}
                {RenderColor(["Pyt", "rgb(60, 118, 167)"], ["hon", "rgb(255, 211, 71)"])}{" | "}
                {RenderColor(["C++", "rgb(101, 155, 210)"])}{" | "}
                {RenderColor(["Ja", "rgb(248, 2, 9)"], ["va", "rgb(0, 110, 185)"])}{" | "}
                {RenderColor(["Rust", "rgb(246, 75, 5)"])}{" "}
                (athough i only really use the first 4) (TypeScript my beloved)
            </p>
            <p>🖌️ i also make logos in {" "}
                <Link Href="https://github.com/SAWARATSUKI/KawaiiLogos" ClassName="text-[rgb(180,180,180)]">
                    sawaratsuki
                </Link> {" "}
            style (i have nothing to show for this but trust me bro)</p>
        </div>
        <div id="bottom-row" className="w-full flex flex-row items-start justify-center gap-[10px]">
            <div className="w-fit flex flex-col items-center justify-center gap-[10px]">
                <Clock/>
                <BirthdayCountDown 
                    BirthDay={1} 
                    BirthMonth={0}
                />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center justify-center border-5 border-solid border-white rounded-[5px] gap-x-[5px] gap-y-[10px]  h-fit p-[20px]">
                <Link 
                    ResourceName="Youtube_logo.png" 
                    Href="https://www.youtube.com/@uwungu01" 
                    Title="i barely upload anything there though"
                >@uwungu01</Link>
                <Link 
                    ResourceName="GitHub_Invertocat_White_Clearspace.png" 
                    Href="https://github.com/chara-dreemurr-67"
                >chara-dreemurr-67</Link>
                <Link 
                    ResourceName="GitHub_Invertocat_White_Clearspace.png" 
                    Href="https://github.com/chara-dreemurr-67/TheBestWebsiteEver"
                >this website itself, on github</Link>
                <Link 
                    ResourceName="discord-avatar-512-S11Q6.png" 
                    Href="https://discord.gg/trademarkcopyright" 
                    Title="i like my trademark copyrighted bruh"
                >TM™C©</Link>
                <Link 
                    ResourceName="discord-avatar-512-S11Q6.png" 
                    Title="active in .gg/trademarkcopyright and .gg/geometrydash. might or might not ignore your dms"
                >@chara_dreemurr_67</Link>
            </div>
        </div>
    </div>
;

export default App;