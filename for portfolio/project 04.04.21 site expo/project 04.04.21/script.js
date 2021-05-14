let categoriesItem = document.querySelectorAll(".categories__item");
let categoriesName = document.querySelectorAll(".categories__name");
let tabItem = document.querySelectorAll(".tab_item");
let showClass = document.querySelector(".show");
let pageWidth = window.screen.width;
let toTopBtn = document.getElementById("to-top-btn");
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



window.onscroll = console.log(pageYOffset);

toTopBtn.style.bottom = '10' + 'px';
toTopBtn.style.left = '10' + 'px';