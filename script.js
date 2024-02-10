function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  var moonIcon = document.getElementById("moon-icon");

moonIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moonIcon.src ="assets/sun-regular-24.png";
    } else{
        moonIcon.src ="assets/moon.png"
    }
}