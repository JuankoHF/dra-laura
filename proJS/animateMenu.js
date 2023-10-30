document.querySelector(".menu").addEventListener("click", animateBars);
//prueba//
document.querySelector(".menu").addEventListener("click", animateNavs);
var navContiner = document.querySelector(".nav_menu");
var headerActive = document.querySelector(".header_menu");

var line1 = document.querySelector(".line1__bars-menu");
var line2 = document.querySelector(".line2__bars-menu");
var line3 = document.querySelector(".line3__bars-menu");


function animateBars() {
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
}
//prueba//
function animateNavs() {
    navContiner.classList.toggle("activenav__menu--click");
    headerActive.classList.toggle("bg_black");
}
//prueba//
var loading = document.querySelector(".loading");
var videoPlay = document.querySelector(".video");

setTimeout(() => {
    console.log("Delayed for 1 second.");
    loading.classList.toggle("not_display");
    videoPlay.play();
    videoPlay.classList.add("video_play");
   
}, "3000");