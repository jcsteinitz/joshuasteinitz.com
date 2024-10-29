const arrow = document.querySelector(".arrow-container");

function manageArrowVisibility() {
  if (window.scrollY < 90) {
    arrow.classList.remove("hidden-smooth");
    arrow.classList.add("visible");
  } else {
    arrow.classList.add("hidden-smooth");
  }
}

function scrollToExperience() {
  const aboutSection = document.getElementById("experience");
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
}

arrow.addEventListener("click", scrollToExperience);
window.addEventListener("scroll", manageArrowVisibility);
window.addEventListener("load", manageArrowVisibility);
