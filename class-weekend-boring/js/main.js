document.querySelector("#check").addEventListener("click", checkDay);

function checkDay() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerText = "All right, now. It's class day!";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#placeToSee").innerText = "Baby, it's the weekend!";
  } else {
    document.querySelector("#placeToSee").innerText = "BORRRRRINNNNGGG!";
  }
}