document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
    const navLinks = document.querySelectorAll(".nav-links a");

    // ✅ Page-Based Highlighting
    function highlightPageLinks() {
        navLinks.forEach(link => {
            let linkHref = link.getAttribute("href");

            // Check if the link matches the current page OR if we're on home.html
            if (currentPage === linkHref || (currentPage === "" && linkHref === "home.html")) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
    
    highlightPageLinks(); // Run initially

    // ✅ Section-Based Highlighting (for scrolling sections)
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(entries => {
        let activeSection = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection = entry.target;
            }
        });

        if (activeSection) {
            const id = activeSection.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            navLinks.forEach(link => link.classList.remove("active"));
            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }
        }
    }, {
        threshold: 0.6 // Adjusted threshold for better activation
    });

    sections.forEach(section => observer.observe(section));

    // ✅ Fix: If scrolling to the very top (hero section), reset to "Home"
    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            highlightPageLinks(); // Ensure "Home" is active when at the top
        }
    });
});
