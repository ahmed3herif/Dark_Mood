let dark = document.getElementById("toggle");

if (localStorage.getItem("theme")=="dark") {
    document.body.classList.add("dark-mode");
    dark.src="sun.png";
} else {
    document.body.classList.remove("dark-mode");
    dark.src="moon.png";
}
dark.addEventListener("click",dark_mode);
function dark_mode(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        dark.src ="sun.png";
    }else{
        localStorage.setItem("theme","light");
        dark.src ="moon.png";
    }
}
// // Set initial theme based on saved preference
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark-mode");
//   dark.src = "sun.png";
// } else {
//   document.body.classList.remove("dark-mode");
//   dark.src = "moon.png";
// }

// // Toggle theme when button is clicked
// dark.addEventListener("click", function() {
//   document.body.classList.toggle("dark-mode");
  
//   // Save preference to local storage
//   if (document.body.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark");
//     dark.src = "sun.png";
//   } else {
//     localStorage.setItem("theme", "light");
//     dark.src = "moon.png";
//   }
// });