const Main = document.getElementById("main"),
    CB = document.getElementById("chickenbutt"),
    Age = document.getElementById("age")
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

Age.textContent = GetYearsSince(new Date(2007, 0, 1, 0, 0, 0, 0).getTime());

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