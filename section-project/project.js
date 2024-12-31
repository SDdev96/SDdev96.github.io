// document.getElementById("expandButton").addEventListener("click", function () {
//   const additionalProjects = document.getElementById("additionalProjects");
//   additionalProjects.classList.toggle("projects-hidden");

//   const button = document.getElementById("expandButton");
//   if (additionalProjects.classList.contains("projects-hidden")) {
//     button.textContent = "Show more projects";
//   } else {
//     button.textContent = "Show less projects";

//     AOS.refresh();
//   }
// });

document.getElementById("expandButton").addEventListener("click", function () {
  const additionalProjects = document.getElementById("additionalProjects");
  additionalProjects.classList.toggle("show"); // Toglie o aggiunge la classe show

  const button = document.getElementById("expandButton");
  if (additionalProjects.classList.contains("show")) {
    button.style.display = "none";
    // button.textContent = 'Show less projects';
    AOS.refresh();
  } else {
    button.textContent = "Show more projects";
  }

  // AOS.refresh();
});
