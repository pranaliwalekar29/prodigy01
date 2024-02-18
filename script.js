document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    // Change style on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 70) {
            navbar.style.backgroundColor = "#999";
        } else {
            navbar.style.backgroundColor = "#33";
        }
    });

    // Change style on hover
    var navLinks = navbar.getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#CBC3E3";
            this.style.color = "#ffffff";
        });

        navLinks[i].addEventListener("mouseleave", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
        });
        
    }
});
