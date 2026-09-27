const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

const footerDetails = document.querySelectorAll("footer details");
const mobileFooter = window.matchMedia("(max-width: 600px)");

function updateFooter() {
    footerDetails.forEach((detail) => {
        if (mobileFooter.matches) {
            detail.removeAttribute("open");
        } else {
            detail.setAttribute("open", "");
        }
    });
}

updateFooter();

mobileFooter.addEventListener("change", updateFooter);

footerDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
        if (!mobileFooter.matches && !detail.open) {
            detail.open = true;
        }
    });
});