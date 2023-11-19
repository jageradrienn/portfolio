let viewWidth = window.innerWidth;
let graphImg = document.querySelector("#graphImg");
let photoImg = document.querySelector("#photoImg");

const IMAGECHANGE = () => {
    if (viewWidth > 540) {
        graphImg.setAttribute("src", "./images/desktop/image-graphic-design.jpg");
        photoImg.setAttribute("src", "./images/desktop/image-photography.jpg");
    }
}

IMAGECHANGE();

const PopupMenu = () => {
    let dropdown = document.querySelector("#dropdownMenuMain");
    dropdown.classList.toggle("dropdown-view");
}

navbarHamburger.addEventListener("click", PopupMenu)

