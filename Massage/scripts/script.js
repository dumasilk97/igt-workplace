'use strict'
var menuBtn = document.getElementById('menu__toogle');
var menuBox = document.getElementById('menu__box');

menuBtn.addEventListener('click', function () {
    var y = window.scrollY;
    var x = window.scrollX;
    document.body.classList.toggle('scroll-hidden');
    window.scrollTo(x, y);
    console.log(x + " ", y);

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
})

