const toggleBar = document.getElementById("themeToggle");
const body = document.body;
if(localStorage.getItem("theme")==="dark"){body.classList.replace("light","dark");}
toggleBar.addEventListener("click",()=>{if(body.classList.contains("light")){body.classList.replace("light","dark"); localStorage.setItem("theme","dark");} else{body.classList.replace("dark","light"); localStorage.setItem("theme","light");}});