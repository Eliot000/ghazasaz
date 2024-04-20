//****************** stiky navigation ****************** */
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

const sectionHeroEl = document.querySelector(".section-hero");

obs.observe(sectionHeroEl);

//****************** mobile navigation ****************** */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // headerEl.classList.add("nav-open");
  // headerEl.classList.remove("nav-open");
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll(".main-nav-link");

allLinks.forEach(function (LinkEl) {
  LinkEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});
