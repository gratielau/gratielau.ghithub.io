/*
setPaginaActiva("home");

function changePage(activePage) {
  setPaginaInactiva("home");
  setPaginaInactiva("skills");
  setPaginaInactiva("projects");
  setPaginaInactiva("languages");
  setPaginaActiva(activePage);
}

function setPaginaInactiva(page) {
  document.getElementById(page).style.display = "none";
  var el = document.getElementById("a-" + page);
  el.style.backgroundColor = "#00897b";
  el.style.color = "#fff";
}

function setPaginaActiva(page) {
  document.getElementById(page).style.display = "block";
  var el = document.getElementById("a-" + page);
  el.style.color = "#00897b";
  el.style.backgroundColor = "#fff";
  document.getElementById(page);
}
*/

//var 1 basic nu este indicata

var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "blok";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = ["home", "skills", "projects", "languages"];
  pages.forEach(function (page) {
    console.info("hide", page);
    hide(page);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}
