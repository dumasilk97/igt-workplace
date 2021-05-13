let categoriesItem = document.querySelectorAll(".categories__item");
let tabItem = document.querySelectorAll(".tab_item");

for (let n = 0; n < categoriesItem.length; n++) {
    categoriesItem[n].addEventListener("click", function() {

        tabItem[n].classList.toggle("show");


    })
}