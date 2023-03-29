console.info("start");
var a = true;
var myName = "Gratiela";

function learning() {
  return "I am learning...";
}

function playGame(game) {
  //console.log(this);
  return `I'm playing ${game}. My name is ${this.name}`;
}

var Gratiela = {
  age: 25,
  name: myName,
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};
var Ion = {
  age: 30,
  name: "Test",
  skills: ["html", "css"],
  learn: learning,
  play: playGame,
};

console.log(Ion.skills);
var l = Ion.learn();
console.log(l);

console.log(Gratiela.play("chess"));
console.log(Ion.play("rubik"));

console.info(playGame.call(Ion, "hide and seek")); // daca am mai multi parametrii ii pun unul dupa altul
console.info(playGame.apply(Gratiela, ["hide and seek"])); // daca am mai multi parametrii ii pun in array
console.warn(playGame("hide and seek"));

document.getElementById("job-title").innerHTML = "Consultant <i>IT</i>";
document.getElementById("job-title").style.color = "green";

document.getElementById("job-title").addEventListener("click", function () {
  document.getElementById("job-title").style.color = "green";
});
