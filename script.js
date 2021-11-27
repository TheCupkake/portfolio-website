// JavaScript source code

window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var myBar = document.getElementById("myBar");
var progressContainer = document.getElementById("progressContainer");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        myBar.classList.add("sticky2")
        progressContainer.classList.add("sticky2")
        navbar.classList.add("sticky")
        

    } else {
        myBar.classList.remove("sticky2");
        progressContainer.classList.remove("sticky2");
        navbar.classList.remove("sticky");
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    myBar.style.width = scrolled + "%";
}


