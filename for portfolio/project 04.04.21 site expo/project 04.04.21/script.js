let categoriesItem = document.querySelectorAll(".categories__item");
let categoriesName = document.querySelectorAll(".categories__name");
let tabItem = document.querySelectorAll(".tab_item");
let showClass = document.querySelector(".show");
let pageWidth = window.screen.width;
let toTopBtn = document.getElementById("");
// ======================================
if (pageWidth < 576) {

    for (let n = 0; n < categoriesItem.length; n++) {

        categoriesItem[n].addEventListener("click", function() {
            tabItem[n].classList.toggle('show');
            event.preventDefault;

        })
        categoriesName[n].addEventListener("click", function() {
            tabItem[n].classList.toggle('show');
            event.preventDefault;

        })
    }
};

