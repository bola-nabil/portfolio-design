// header & home
const barHome = document.getElementById("bar-home");
const headerLinks = document.querySelectorAll(".header-links nav ul")[0];
const exitIcon = document.getElementById("exit-icon");
const homeSection = document.getElementById("home");
const homeContent = document.getElementById("section-content");
const headerLinksPart = document.getElementById("header-links");
const aboutSection = document.getElementById("about-section");
const blogSection = document.getElementById("blog-section");
const portfolioSection = document.getElementById("portfolio-section");
const contactSection = document.getElementById("contact-section");
const pageTitle = document.querySelector("title").innerText;
const logoImage = document.getElementById("main-logo");

barHome.style.display = "block";
headerLinks.style.display = "none";
exitIcon.style.display = "none";
headerLinksPart.classList.add("hidden");

barHome.addEventListener("click", function () {
  headerLinks.style.display = "block";
  logoImage.style.display = "block";
  barHome.style.display = "none";
  exitIcon.style.display = "block";
  if (pageTitle === "Portfolio Project") {
    homeSection.style.backgroundImage = "none";
    homeSection.style.backgroundColor = "#101010";
    homeContent.classList.add("hidden");
  }
  if (pageTitle === "About Page") {
    aboutSection.classList.add("hidden");
  }
  if (pageTitle === "Blog Page") {
    blogSection.classList.add("hidden");
  }
  if (pageTitle === "Portfolio Page") {
    portfolioSection.classList.add("hidden");
  }
  if (pageTitle === "Contact Page") {
    contactSection.classList.add("hidden");
  }

  headerLinksPart.classList.remove("hidden");
});

exitIcon.addEventListener("click", function () {
  headerLinks.style.display = "none";
  barHome.style.display = "block";
  exitIcon.style.display = "none";
  if (pageTitle === "Portfolio Project") {
    homeContent.classList.remove("hidden");
    homeSection.style.backgroundImage =
      "url('./imgs/pages/home/home-background.png')";
  }
  if (pageTitle === "About Page") {
    aboutSection.classList.remove("hidden");
  }

  if (pageTitle === "Blog Page") {
    blogSection.classList.remove("hidden");
  }
  if (pageTitle === "Portfolio Page") {
    portfolioSection.classList.remove("hidden");
  }

  if (pageTitle === "Contact Page") {
    contactSection.classList.remove("hidden");
  }

  headerLinksPart.classList.add("hidden");
});

//chane colors;
const colorOptions = document.querySelectorAll(".color-option");
const savedColor = sessionStorage.getItem("selectedColor");

if (savedColor) {
  document.documentElement.style.setProperty("--custom-color", savedColor);
}

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedColor = option.dataset.color;
    document.documentElement.style.setProperty("--custom-color", selectedColor);
    sessionStorage.setItem("selectedColor", selectedColor);
  });
});

// colors section

const colorsIcon = document.getElementById("colors-icon");
const backgroundSection = document.getElementById("background-colors");

backgroundSection.style.display = "none";

colorsIcon.addEventListener("click", () => {
  if (backgroundSection.style.display === "none") {
    backgroundSection.style.display = "block";
  } else if (backgroundSection.style.display === "block") {
    backgroundSection.style.display = "none";
  }
});
