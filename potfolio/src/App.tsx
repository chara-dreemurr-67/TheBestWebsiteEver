import type { JSX } from "react";
import Age from "./components/Age";
import BirthdayCountDown from "./components/BirthdayCountdown";
import Clock from "./components/Clock";
import Link from "./components/Link";
import RenderColor from "./components/RenderColor";

const App = (): JSX.Element => 
    <div id="main" className="flex flex-col items-center justify-center gap-[10px] text-[1.5em] font-serif">
        <div className="w-fit h-fit text-center border-5 border-solid border-white rounded-[5px] p-[20px]">welcome to the most 🚰 portfolio ever</div>
        <div className="flex flex-col items-start justify-center gap-[15px] border-5 border-solid border-white rounded-[5px] p-[20px]">
            <span>&nbsp;🇻🇳&nbsp; Vietnamese</span>
            <span>🌙 <Age BirthDate={new Date(2007, 0, 1, 0, 0, 0, 0)}/> years old</span>
            <span>🚰 Claire Iidea | i could be male, i could be female, why care? pronoun doesn't matter to me anyway</span>
            <span>🔖 game developer using {" "}
                <Link Href="https://godotengine.org/" ClassName="text-[rgb(180,180,180)]">
                    Godot Engine
                </Link> {" "}
                Mono (basically {RenderColor(["C#", "rgb(131, 104, 224)"])} version of {" "}
                <Link Href="https://godotengine.org/" ClassName="text-[rgb(180,180,180)]"> 
                    Godot Engine
                </Link> {" "}
                because i fucking hate gdscript)
            </span>
            <span>💯 i know:{" "}
                {RenderColor(["Type", "rgb(55, 124, 200)"])}/{RenderColor(["JavaScript", "rgb(240, 220, 85)"])}{" | "}
                {RenderColor(["C#", "rgb(131, 104, 224)"])}{" | "}
                {RenderColor(["Pyt", "rgb(60, 118, 167)"], ["hon", "rgb(255, 211, 71)"])}{" | "}
                {RenderColor(["C++", "rgb(101, 155, 210)"])}{" | "}
                {RenderColor(["Ja", "rgb(248, 2, 9)"], ["va", "rgb(0, 110, 185)"])}{" | "}
                {RenderColor(["Rust", "rgb(246, 75, 5)"])}{" "}
                (athough i only really use the first 4) ({RenderColor(["TypeScript", "rgb(55, 124, 200)"])} my beloved)
            </span>
            <span>🖌️ i also make logos in {" "}
                <Link Href="https://github.com/SAWARATSUKI/KawaiiLogos" ClassName="text-[rgb(180,180,180)]">
                    sawaratsuki
                </Link> {" "}
                style (nvm i have created a <Link Href="https://github.com/chara-dreemurr-67/ClairesSanctum" ClassName="text-[rgb(180,180,180)]">repository</Link> for that now)
            </span>
            <span>🎮 my favorite games: {" "}
                <Link Href="https://store.steampowered.com/app/239140/Dying_Light/" ClassName="text-[rgb(180,180,180)]">Dying Light</Link>{", "}
                <Link Href="https://store.steampowered.com/app/105600/Terraria/" ClassName="text-[rgb(180,180,180)]">Terraria</Link>{", "}
                <Link Href="https://store.steampowered.com/app/391540/Undertale/" ClassName="text-[rgb(180,180,180)]">Undertale</Link>{", "}
                <Link Href="https://store.steampowered.com/app/1414250/CORPSE_FACTORY/" ClassName="text-[rgb(180,180,180)]">Coprse Factory</Link>
            </span>
        </div>
        <div id="bottom-row" className="w-full flex flex-row items-start justify-center gap-[10px]">
            <div className="w-fit flex flex-col items-center justify-center gap-[10px]">
                <Clock/>
                <BirthdayCountDown 
                    BirthDay={1} 
                    BirthMonth={0}
                />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center justify-center border-5 border-solid border-white rounded-[5px] gap-x-[5px] gap-y-[10px] h-fit p-[20px]">
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
                {/*<Link 
                    ResourceName="discord-avatar-512-S11Q6.png" 
                    Href="https://discord.gg/trademarkcopyright" 
                    Title="i like my trademark copyrighted bruh"
                >TM™C©</Link>*/}
                <Link 
                    ResourceName="discord-avatar-512-S11Q6.png" 
                    Href="https://discord.com/users/1132150203714117652"
                    Title="active in .gg/geometrydash. might or might not ignore your dms"
                >@chara.dreemurr.67</Link>
            </div>
        </div>
    </div>
;

export default App;