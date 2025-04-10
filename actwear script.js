document.addEventListener("DOMContentLoaded", function () {
    let activewearSection = document.querySelector(".activewear-container");

    function fadeInOnScroll() {
        let position = activewearSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            activewearSection.classList.add("fade-in");
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);
});
