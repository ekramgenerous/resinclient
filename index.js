
let navbar = document.querySelector("nav ul");
let barsIcon = document.getElementById("bars-icon");

barsIcon.onclick = function(){
    barsIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
