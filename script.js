const hum = document.querySelector("#hum");

hum.addEventListener("click", () => {
  if (hum.classList.contains("humberger")) {
    hum.classList.remove("humberger");
    hum.classList.add("clicked");
  } else {
    hum.classList.remove("clicked");
    hum.classList.add("humberger");
  }
});
