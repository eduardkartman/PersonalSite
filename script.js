document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const downloadCvBtn = document.getElementById("download-cv-btn");
  const contactInfoBtn = document.getElementById("contact-info-btn");
  const linkedinIcon = document.getElementById("linkedin-icon");
  const githubIcon = document.getElementById("github-icon");
  const experienceArrow = document.getElementById("experience-arrow");
  const projectsArrow = document.getElementById("projects-arrow");
  const contactArrow = document.getElementById("contact-arrow");
  const dentalClinicBtn = document.getElementById("dental-clinic-btn");
  const todoListBtn = document.getElementById("todo-list-btn");
  const bankistAppBtn = document.getElementById("bankist-app-btn");
  const splendidFoodBtn = document.getElementById("splendid-food-btn");
  const pigGameBtn = document.getElementById("pig-game-btn");
  const maptyBtn = document.getElementById("mapty-btn");
  const quizAppBtn = document.getElementById("quiz-app-btn");
  const artistPortfolioBtn = document.getElementById("artist-portfolio-btn");
  const flyAwayBtn = this.doctype.getElementById("fly-away-btn");

  // Toggle menu function
  icon.addEventListener("click", function () {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  });

  // Button and link actions
  downloadCvBtn.addEventListener("click", function () {
    window.open("./assets/eduard-resume.pdf");
  });

  contactInfoBtn.addEventListener("click", function () {
    location.href = "#contact";
  });

  linkedinIcon.addEventListener("click", function () {
    window.location.href = "https://linkedin.com/in/eduardkartman";
  });

  githubIcon.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman?tab=repositories";
  });

  experienceArrow.addEventListener("click", function () {
    location.href = "#experience";
  });

  projectsArrow.addEventListener("click", function () {
    location.href = "#projects";
  });

  contactArrow.addEventListener("click", function () {
    location.href = "#contact";
  });

  dentalClinicBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/DentalClinic";
  });

  todoListBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/ToDoApp";
  });

  bankistAppBtn.addEventListener("click", function () {
    window.location.href =
      "https://github.com/eduardkartman/BankistApp/tree/main/12-Numbers-Dates-Timers-Bankist";
  });

  splendidFoodBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/product-and-cart";
  });

  pigGameBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/Pig-Game";
  });

  maptyBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/mapty";
  });

  quizAppBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/quiz-app";
  });

  artistPortfolioBtn.addEventListener("click", function () {
    window.location.href =
      "https://github.com/eduardkartman/artist-portfolio-frontend";
  });

  flyAwayBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/eduardkartman/travel-list";
  });
});
