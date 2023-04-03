var activePage = "skills";

show(activePage);

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
    //dataset functioneaza doar pt proprietati custom de tip data-denumireaTa, getatribute functioneaza pt orice denumire la proprietatea custom
    showPage(id);
  }
});

//var 1 simpla
/*
function showSkills() {
  //console.time("show");
  var skills = ["HTML", "CSS", "JS"];
  var skillsHtml = "";
  skills.forEach(function (skill) {
    // container.innerHTML += "<li>" + skill + "</li>";
    skillsHtml += `<li> ${skill}</li>`;
  });
  //console.timeEnd("show");
  //console.time("display");

  //variabilele care folosesc elemente de tip dom (din interfata/ care se vad) se declara doar in momentul in care le folosim deoarece papa timp si consuma memoria browserului
  var container = document.querySelector("#skills ul");
  container.innerHTML = skillsHtml;
}
*/
//var 2 optimizata
function showSkills() {
  //console.time("show");
  var skills = ["HTML", "CSS", "JS"];
  var html = skills.map(function (skill) {
    return `<li> ${skill}</li>`;
  });

  var container = document.querySelector("#skills ul");
  container.innerHTML = html.join("");
}
showSkills();
