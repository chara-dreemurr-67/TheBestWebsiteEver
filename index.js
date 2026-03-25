const Main = document.getElementById("main"),
    CB = document.getElementById("chickenbutt")
;

const CustomHyperLinks = document.getElementsByClassName("custom-links");

/**
 * @type {number?}
 */
let CBCoolDown = null;

CB.addEventListener("click", () => {
    if(CBCoolDown) 
        clearTimeout(CBCoolDown);
    
    CB.textContent = "chicken butt";
    CBCoolDown = setTimeout(() => {
        CB.textContent = "guess what?";
        CBCoolDown = null;
    }, 3000);
});

for(const Link of CustomHyperLinks) {
    Link.addEventListener("click", () => window.open(Link.getAttribute("csrc"), "_blank"));
}