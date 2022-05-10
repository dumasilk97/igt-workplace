// Плавный якорь

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
var menuItem = document.getElementsByClassName("menu__item");
var y = new Number;
const menuToggle = document.getElementById('menu__toggle');
window.addEventListener('scroll', function () {
    y = scrollY;
});



for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
        menuToggle.checked = false;
        document.body.classList.remove('scroll-hidden');
    })
}


menuToggle.addEventListener("click", function () {
    scrollTo(0, y);
    document.body.classList.toggle('scroll-hidden');

})




// // Когда модальное окно открыто, фиксируем элемент body
// document.body.style.position = 'fixed';
// document.body.style.top = `-${window.scrollY}px`;

// // Когда модальное окно скрыто, остаемся в верхней части позиции прокрутки
// document.body.style.position = '';
// document.body.style.top = '';


// // When the modal is hidden...
// const top = document.body.style.top;
// document.body.style.position = '';
// document.body.style.top = '';
// window.scrollTo(0, parseInt(scrollY || '0') * -1);