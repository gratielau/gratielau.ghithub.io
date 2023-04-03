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
  /*
  document.querySelectorAll(".page"); //orice elem care are clasa page
  document.querySelectorAll("#main .page"); // toate elem din interiorul elem cu id main
  document.querySelectorAll("#main >.page"); // toate elem din interiorul elem cu id main doar din primul nivel
  */
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  //console.warn("click", e.target.matches("a")); //functia matches returneaza true sau false daca s-a dat click pe un obiect din selector(a in cazul nostru)
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});
