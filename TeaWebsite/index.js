const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const homeSec = document.querySelector(".home-sec");
const flavourBtn = document.querySelector(".flavour");
const reviewBtn = document.querySelector(".review");
const orderBtn = document.querySelector(".btn");


function change(){
    aboutBtn.addEventListener("click", () => {
        homeSec.style.display = 'none';
        aboutBtn.style.display = 'block';
    });
    homeBtn.addEventListener("click", () => {
        homeSec.style.display = 'none';
        homeBtn.style.display = 'block';
    });
    flavourBtn.addEventListener("click", () => {
        homeSec.style.display = 'none';
        flavourBtnBtn.style.display = 'block';
    });
    reviewBtn.addEventListener("click", () => {
        homeSec.style.display = 'none';
        reviewBtn.style.display = 'block';
    });
    orderBtn.addEventListener("click", () => {
        homeSec.style.display = 'none';
        orderBtn.style.display = 'block';
    });
}

