// COLOR CODES
  // PURPLE rgba(213, 184, 255, 1)
  // GREEN rgba(183, 244, 216, 1)
  // BLUE rgba(0, 181, 204, 1)
  // ORANGE rgba(251, 192, 147, 1)

document.getElementById("purple").onclick = pastelPurple;
document.getElementById("green").onclick = pastelGreen;
document.getElementById("blue").onclick = pastelBlue;
document.getElementById("orange").onclick = pastelOrange;

function pastelPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(213, 184, 255, 1)";
  document.querySelector("body").style.color = "white";
}

function pastelGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(183, 244, 216, 1)";
  document.querySelector("body").style.color = "white";
}

function pastelBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0, 181, 204, 1)";
  document.querySelector("body").style.color = "white";
}

function pastelOrange() {
  document.querySelector("body").style.backgroundColor = "rgba(251, 192, 147, 1)";
  document.querySelector("body").style.color = "white";
}