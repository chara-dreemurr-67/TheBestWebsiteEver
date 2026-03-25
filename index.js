const Main = document.getElementById("main"),
    CB = document.getElementById("chickenbutt"),
    Age = document.getElementById("age"),
    Message = document.getElementById("message"),
    Months = document.getElementById("months")
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
    document.getElementById("time").innerHTML = TimeString;
};

const UpdateBirthdayMessage = (BirthMonth, BirthDay) => {
    const Today = new Date();
    const CurrentYear = Today.getFullYear();
    let Birthday = new Date(CurrentYear, BirthMonth - 1, BirthDay);

    if(Today > Birthday) 
        Birthday = new Date(CurrentYear + 1, BirthMonth - 1, BirthDay);

    const LastBirthday = new Date(Birthday);
    LastBirthday.setFullYear(Birthday.getFullYear() - 1);
    const DaysSinceLastBirthday = Math.floor((Today - LastBirthday) / 86400000);

    if(DaysSinceLastBirthday >= 0 && DaysSinceLastBirthday <= 7) {
        Message.textContent = "it's my birthday";
        return;
    }

    let Months = (Birthday.getFullYear() - Today.getFullYear()) * 12 + (Birthday.getMonth() - Today.getMonth());
    if(Birthday.getDate() < Today.getDate()) 
        Months--;
    
    Message.textContent = `it's ${Months} month${Months !== 1 ? 's' : ''} left until my birthday`;
}

UpdateClock();
Age.textContent = GetYearsSince(new Date(2007, 0, 1, 0, 0, 0, 0).getTime());
UpdateBirthdayMessage(1, 1);

setInterval(() => {
    UpdateClock();
    Age.textContent = GetYearsSince(new Date(2007, 0, 1, 0, 0, 0, 0).getTime());
    UpdateBirthdayMessage(1, 1);
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