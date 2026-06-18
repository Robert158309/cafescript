const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* REFRESH FADE */
const links = document.querySelectorAll(".nav-link");

const current = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const target = link.getAttribute("href");

  if (target === current) {
    link.classList.add("active");
  }

  link.addEventListener("click", (e) => {
    if (target === current) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});