let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

function count() {
  counter++;

  if (counter % 10 === 0) {
    alert("nelly would like to thank you for the water 💙");
  }

  document.querySelector(".counter").innerHTML = counter;
}
