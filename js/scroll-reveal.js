const elements = document.querySelectorAll(
  ".hero, .motivation, .stats, .routes, .path, .quote, .cta",
);

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },

  {
    threshold: 0.10,
    rootMargin: "0px 0px -100px 0px",
  },

);

elements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
