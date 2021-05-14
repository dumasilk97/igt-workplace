let categoriesItem = document.querySelectorAll(".categories__item");
let tabItem = document.querySelectorAll(".tab_item");
let showClass = document.querySelector(".show");
let pageWidth = window.screen.width;

// ======================================

<<<<<<< HEAD
categoriesItem[1].addEventListener("click", function() {
    tabItem[1].classList.toggle('show');

})
=======
// ======================================
if (pageWidth < 576) {
    for (let n = 0; n < categoriesItem.length; n++)
        categoriesItem[n].addEventListener("click", function() {
            tabItem[n].classList.toggle("show");

        })
}
>>>>>>> 8eeec6d44bf80eaad04b4c7e5075571f1f2364ff
