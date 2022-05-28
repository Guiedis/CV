///////////////////////////////////////////////////////////
// Make Mobile navigation works
///////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth Scrolling Animation
///////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scrolls back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scrolls to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////////////

const sectionAboutMe = document.querySelector(".section-about-me");

const obs1 = new IntersectionObserver(
  function (entries) {
    const ent1 = entries[0];
    // console.log(ent);
    if (ent1.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent1.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Observe elements IN the viewport
    root: null,
    // As soon as the whole element appears in the viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs1.observe(sectionAboutMe);

///////////////////////////////////////////////////////////
// Secondary Skills Bar - Animation Observe
///////////////////////////////////////////////////////////

const containerSecondarySkills = document.querySelector(
  ".container-secondary-skills"
);

const obs2 = new IntersectionObserver(
  function (entries) {
    const ent2 = entries[0];
    var percentage1 = document.getElementById("percentage-1");
    var percentage2 = document.getElementById("percentage-2");
    var percentage3 = document.getElementById("percentage-3");
    var percentage4 = document.getElementById("percentage-4");
    var percentage5 = document.getElementById("percentage-5");
    var percentage6 = document.getElementById("percentage-6");

    if (ent2.isIntersecting === true) {
      percentage1.classList.add("p-organized");
      percentage2.classList.add("p-detailed");
      percentage3.classList.add("p-flexibility");
      percentage4.classList.add("p-adaptability");
      percentage5.classList.add("p-team-working");
      percentage6.classList.add("p-timing");
    }
  },
  {
    // Observe elements IN the viewport
    root: null,
    // As soon as the whole element appears in the viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs2.observe(containerSecondarySkills);
