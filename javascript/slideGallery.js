let leftSlider = document.querySelector(".move-before");
let rightSlider = document.querySelector(".move-after");
let gallery = document.querySelector("#gallery");

leftSlider.addEventListener("click", moveLeft);
let i = 2;

function moveLeft() {
    if (i == 2) {
        gallery.style.transform = "translateX(81rem)";
        i = i - 1;
        leftSlider.innerHTML = "<i class=\"fas fa-angle-left\"></i> 01";
    }
    if (i == 3) {
        gallery.style.transform = "translateX(0rem)";
        i = i - 1;
        leftSlider.innerHTML = "<i class=\"fas fa-angle-left\"></i> 02";
    }
}

rightSlider.addEventListener("click", moveRight);

function moveRight() {
    if (i == 2) {
        gallery.style.transform = "translateX(-81rem)";
        i = i + 1;
        leftSlider.innerHTML = "<i class=\"fas fa-angle-left\"></i> 03";
    }
    if (i == 1) {
        gallery.style.transform = "translateX(0rem)";
        i = i + 1;
        leftSlider.innerHTML = "<i class=\"fas fa-angle-left\"></i> 02";
    }
}