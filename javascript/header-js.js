let interactiveElem = document.querySelector(".interactive-h1");
let portfolioElem = document.querySelector(".portfolio-h1");

window.onscroll = function() { moveText() };

function moveText() {
    let alpha = document.body.scrollTop;
    if( alpha > 0) {
        interactiveElem.style.marginLeft = 0 + alpha/4 - 80 + "px";
        portfolioElem.style.marginLeft = "calc(45% - 40px - " + alpha/6 + "px)";
    }
    
}

