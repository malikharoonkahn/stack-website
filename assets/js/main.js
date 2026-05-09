// Shared reusable navbar/footer component logic for all pages.
const routes = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "download.html", label: "Download" },
  { href: "features.html", label: "Features" },
  { href: "contact.html", label: "Contact" }
];

const navbarContainer = document.getElementById("navbar");
const footerContainer = document.getElementById("footer");
const pagePath = window.location.pathname.split("/").pop() || "index.html";

if (navbarContainer) {
  navbarContainer.innerHTML = `
    <header class="topbar">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Royal Dream APK home">
          <img src="assets/images/logo.svg" alt="Royal Dream APK logo" />
          <span>Royal Dream APK</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Toggle menu">Menu</button>
        <nav class="menu" aria-label="Main navigation">
          ${routes
            .map(
              (item) =>
                `<a href="${item.href}" class="${pagePath === item.href ? "active" : ""}">${item.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

if (footerContainer) {
  footerContainer.innerHTML = `
    <footer>
      <div class="container footer-wrap">
        <p class="small-text">Copyright ${new Date().getFullYear()} Royal Dream APK. All rights reserved.</p>
        <div class="socials" aria-label="Social links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Telegram">t</a>
          <a href="#" aria-label="YouTube">y</a>
          <a href="#" aria-label="Discord">d</a>
        </div>
      </div>
    </footer>
  `;
}

// Mobile menu interaction.
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// Smooth reveal animation as content appears in viewport.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

// Simple front-end only contact form feedback.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been recorded. Our support team will respond soon.");
    contactForm.reset();
  });
}
