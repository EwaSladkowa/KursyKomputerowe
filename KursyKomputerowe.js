darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", () => {
  if (darkMode.innerText === "Change to dark mode") {
    darkMode.innerText = "Change to light mode";
  } else{
    darkMode.innerText = "Change to dark mode";
  }
  const div1 = document.getElementsByClassName("div1")[0];
  div1.classList.toggle("darkMode");
});
