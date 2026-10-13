const animatedItems = document.querySelectorAll(".project, .role, .stack-grid > div, .section-label");

document.documentElement.classList.add("motion-ready");
animatedItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

animatedItems.forEach((item) => observer.observe(item));
