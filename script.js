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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bar = entry.target.querySelector('.bar');
        const text = entry.target.querySelector('.skills-h2');
        const logosLeft = document.querySelector('#logos-left');
        const logosRight = document.querySelector('#logos-right');
        
        if (entry.isIntersecting) {
            bar.classList.add('bar-animation');
            text.classList.add('skills-h2-animation');
            logosLeft.classList.add('logos-left-animation');
            logosRight.classList.add('logos-right-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        bar.classList.remove('bar-animation');
        text.classList.remove('skills-h2-animation');
        logosLeft.classList.remove('logos-left-animation');
        logosRight.classList.remove('logos-right-animation');
    });
});

observer.observe(document.querySelector('.skills-container'));


