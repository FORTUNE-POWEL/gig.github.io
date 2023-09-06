document.body.onscroll = function() { scrollMe() };
var navigationBar = document.getElementById("main_nav");

function scrollMe() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navigationBar.classList.add('nav_slide');
    } else {
        navigationBar.classList.remove('nav_slide');
    }

}

//disappering nav menun in the details pages
var navList = document.getElementById("menun");

function disapper() {
    if (navList.style.display == "none") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }

}