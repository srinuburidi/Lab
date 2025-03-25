document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll("a.nav-link");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
