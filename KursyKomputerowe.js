darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", () => {
  // if (darkMode.innerText = "Change to light mode" = true){
  //     darkMode.innerText = "Change to dark mode";
  // }else{
  //     darkMode.innerText = "Change to light mode";
  // }
  const div1 = document.getElementsByClassName("div1")[0];
  div1.classList.toggle("darkMode");
});
