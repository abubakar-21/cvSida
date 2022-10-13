let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.name = "sunny"
        // icon.style.fill = "white" // rad 85 i css style filen
    }
    else{
        icon.name = "moon"
        // icon.style.fill = "black" // rad 85 i css style filen
    }
})

// let navItem = document.getElementsByClassName("navItem")[0];
// console.log(navItem);

// navItem.addEventListener("click", ()=> {
//     console.log("clicked!");
//     document.body.classList.toggle("active-nav");
//     navItem.style.color = "red";
// })
