const button = document.getElementById("myButton");
const square = document.querySelector(".square");

button.addEventListener("click", function() {
  button.classList.add("clicked");
  square.style.backgroundColor = "lightgreen";
});
