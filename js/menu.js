var menu = document.querySelector(".menu");
var siteNavigation = document.querySelector(".site-navigation");
var body = document.querySelector("body");

menu.onclick = function () {
    menu.classList.toggle("active");
    siteNavigation.classList.toggle("active");
    body.classList.toggle("lock");
};