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
