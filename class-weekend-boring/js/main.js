const monWed = document.querySelector("#weekday");
const tuesThurs = document.querySelector("#weekday-two");
const friday = document.querySelector("#friday");
const weekend = document.querySelector("#weekend");

document.querySelector("#pick").addEventListener("click", pickOutfit);

function pickOutfit() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "monday" || day === "wednesday") {
    monWed.classList.toggle("hidden");
    tuesThurs.classList.add("hidden");
    weekend.classList.add("hidden");
    friday.classList.add("hidden");
  } else if (day === "tuesday" || day === "thursday") {
    tuesThurs.classList.toggle("hidden");
    weekend.classList.add("hidden");
    friday.classList.add("hidden");
    monWed.classList.add("hidden");
  } else if (day === "saturday" || day === "sunday") {
    weekend.classList.toggle("hidden");
    friday.classList.add("hidden");
    monWed.classList.add("hidden");
    tuesThurs.classList.add("hidden");
  } else {
    friday.classList.toggle("hidden");
    monWed.classList.add("hidden");
    tuesThurs.classList.add("hidden");
    weekend.classList.add("hidden");
  }
}