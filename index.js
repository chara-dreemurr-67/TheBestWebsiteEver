const Main = document.getElementById("main"),
    CB = document.getElementById("chickenbutt"),
    Age = document.getElementById("age"),
    Birthday = document.getElementById("birthday"),
    Months = document.getElementById("months"),
    Time = document.getElementById("time")
;

const CustomHyperLinks = document.getElementsByClassName("custom-links");

/**
 * @type {number?}
 */
let CBCoolDown = null;

const GetYearsSince = (epoch) => {
    const StartDay = new Date(epoch);
    const Now = new Date();
    const Years = Now.getFullYear() - StartDay.getFullYear();
    const HasHadAnniversary = Now.getMonth() > StartDay.getMonth() || 
        (Now.getMonth() === StartDay.getMonth() && Now.getDate() >= StartDay.getDate());
    
    return HasHadAnniversary ? Years : Years - 1;
};

const UpdateClock = () => {
    const Now = new Date();
    const TimeString = Now.toLocaleString("en-GB", {
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
    Time.textContent = TimeString;
};

const UpdateCountdown = (BirthDay, BirthMonth) => {
    const Now = new Date();
    const CurrentYear = Now.getFullYear();
    let NextBirthday = new Date(CurrentYear, BirthMonth, BirthDay);

    const TimeSinceBirthday = Now - NextBirthday;

    if(TimeSinceBirthday >= 0 && TimeSinceBirthday < 604800000) {
        Birthday.innerHTML = "<span>it's my birthday :)</span>";
        return;
    }

    if(NextBirthday < Now) 
        NextBirthday = new Date(CurrentYear + 1, BirthMonth, BirthDay);

    const Difference = NextBirthday - Now;

    const Seconds = Math.floor(Difference / 1000) % 60;
    const Minutes = Math.floor(Difference / 60000) % 60;
    const Hours = Math.floor(Difference / 3600000) % 24;
    const Days = Math.floor(Difference / 86400000);

    const Format = (Num) => String(Num).padStart(2, "0");

    Birthday.innerHTML = `<span>countdown to my birthday</span>
<span>${Format(Days)}:${Format(Hours)}:${Format(Minutes)}:${Format(Seconds)}</span>`;
};

UpdateClock();
UpdateCountdown(1, 0);
Age.textContent = GetYearsSince(new Date(2007, 0, 1, 0, 0, 0, 0).getTime());

setInterval(() => {
    UpdateClock();
    UpdateCountdown(1, 0);
    Age.textContent = GetYearsSince(new Date(2007, 0, 1, 0, 0, 0, 0).getTime());
}, 1000);

CB.addEventListener("click", () => {
    if(CBCoolDown) 
        clearTimeout(CBCoolDown);
    
    CB.textContent = "chicken butt";
    CBCoolDown = setTimeout(() => {
        CB.textContent = "guess what?";
        CBCoolDown = null;
    }, 1000);
});

for(const Link of CustomHyperLinks) {
    Link.addEventListener("click", () => window.open(Link.getAttribute("csrc"), "_blank"));
}