let coordA = document.querySelector(".coord-x");
let coordB = document.querySelector(".coord-y");
let imgGalleryArr = document.querySelectorAll(".elem-gallery");
imgGalleryArr.forEach(elem => {
    elem.classList.add("gallery-elem");
});

function displayCoords(event) {
    let x = event.pageX;
    let y = event.pageY;
    coordA.innerHTML = x;
    coordB.innerHTML = y;
    if (x < 125) {
        imgGalleryArr.forEach(elem => {
            elem.classList.add("gallery-elem-p2");
        });
    } else if (x > 125) {
        imgGalleryArr.forEach(elem => {
            elem.classList.remove("gallery-elem-p2");
        });
    }
};

function clearCoords() {
    coordA.innerHTML = "";
    coordB.innerHTML = "";
}