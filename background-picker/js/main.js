// COLOR CODES
  // SEASIDE rgba(232, 214, 203, 1)
  // TEAK rgba(166, 145, 92, 1)
  // BLUEMINE rgba(30, 81, 123, 1)
  // LIGHTWOOD rgba(130, 94, 92, 1)

document.getElementById("seaside").onclick = makeSeaside;
document.getElementById("teak").onclick = makeTeak;
document.getElementById("bluemine").onclick = makeBluemine;
document.getElementById("lightwood").onclick = makeLightwood;

function makeSeaside() {
  document.querySelector("body").style.backgroundColor = "rgba(232, 214, 203, 1)";
  document.querySelector("body").style.color = "white";
}

function makeTeak() {
  document.querySelector("body").style.backgroundColor = "rgba(166, 145, 92, 1)";
  document.querySelector("body").style.color = "white";
}

function makeBluemine() {
  document.querySelector("body").style.background = "rgba(30, 81, 123, 1)";
  document.querySelector("body").style.color = "white";
}

function makeLightwood() {
  document.querySelector("body").style.backgroundColor = "rgba(130, 94, 92, 1)";
  document.querySelector("body").style.color = "white";
}

