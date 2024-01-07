document.addEventListener("DOMContentLoaded", function() {
    var scrollLink = document.getElementById("scrollLink");

    scrollLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior (e.g., navigating to a new page)

        var targetSection = document.getElementById("targetSection");
        
        // Scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});