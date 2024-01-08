document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Get the target section ID from the href attribute
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            // Scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
