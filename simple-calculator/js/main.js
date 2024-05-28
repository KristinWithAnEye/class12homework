let total = 0;

document.querySelector("#zero").addEventListener("click", makeZero);
document.querySelector("#add-three").addEventListener("click", addThree);
document.querySelector("#add-nine").addEventListener("click", addNine);
document.querySelector("#sub-two").addEventListener("click", subTwo);
document.querySelector("#sub-five").addEventListener("click", subFive);
document.querySelector("#sub-ten").addEventListener("click", subTen);

function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function addThree() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function addNine() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerText = total;
}

function subTwo() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerText = total;
}

function subFive() {
  total = total - 5;
  document.querySelector("#placeToPutResult").innerText = total;
}

function subTen() {
  total = total - 10;
  document.querySelector("#placeToPutResult").innerText = total;
}