let categoriesItem = document.querySelectorAll(".categories__item");
let tabItem = document.querySelectorAll(".tab_item");
let showClass = document.querySelector(".show");
let pageWidth = window.screen.width;

// ======================================

categoriesItem[1].addEventListener("click", function() {
    tabItem[1].classList.toggle('show');

})