darkMode = document.getElementById("dark-mode");
let div1 = document.getElementsByClassName("div1")[0];
darkMode.addEventListener("click", () => {
  Mode();
  div1.classList.toggle("darkMode");
  text();
});

if (window.localStorage.getItem("Darkmode") == undefined) {
  window.localStorage.setItem("Darkmode", "false");
}
text();
function Mode() {
  let mode = window.localStorage.getItem("Darkmode");
  if (mode == "true") {
    mode = "false";
    window.localStorage.setItem("Darkmode", mode);
  } else {
    mode = "true";
    window.localStorage.setItem("Darkmode", mode);
  }
}
if (window.localStorage.getItem('Darkmode') == 'false') {
  div1.classList.remove("darkMode");
}else{
  div1.classList.add("darkMode");
}
function text(){
  if (window.localStorage.getItem('Darkmode') == 'true') {
    darkMode.innerText = "Change to light mode";
  } else {
    darkMode.innerText = "Change to dark mode";
  }
}