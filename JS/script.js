let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.name = "sunny"
    }
    else{
        icon.name = "moon"
