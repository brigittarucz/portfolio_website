let a1 = document.querySelector(".sticky").offsetHeight;
let a2 = document.querySelector("header").offsetHeight;

let arr = document.querySelectorAll("h3");

let b1 = document.querySelector(".section-a").offsetHeight;

let c1 = document.querySelector(".section-b").offsetHeight;

let textMove = document.querySelector(".fade-text");

let reverseText = document.querySelector(".reverse-text");

function Scrolls() {

    function SlideLeftA() {
        let beta = document.body.scrollTop;
        if (beta > (a1 + a2 + 20)) {
            arr[0].classList.add("slide-left");
        }
        if (beta > (a1 + a2 - 20)) {
            textMove.classList.add("fade-slide");
        }
    }

    SlideLeftA();

    function SlideLeftB() {
        let beta = document.body.scrollTop;
        if (beta > (a1 + a2 + b1 + 200)) {
            arr[1].classList.add("slide-left");
        }
    }

    SlideLeftB();

    function SlideLeftC() {
        let beta = document.body.scrollTop;
        if (beta > (a1 + a2 + b1 + c1 / 2)) {
            arr[2].classList.add("slide-left");
        }
    }

    SlideLeftC();

}

/* RECURSIVITY */

function addClass() {
    setTimeout(addClass, 7000);
    reverseText.classList.add("reverse-back");
    reverseText.addEventListener("animationend", removeClass);
}
addClass();

function removeClass() {
    reverseText.classList.remove("reverse-back");
};

window.onscroll = function () {
    Scrolls();
    moveText();
};