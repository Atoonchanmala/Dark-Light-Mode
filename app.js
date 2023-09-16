const icon = document.querySelector("i");
const tagP = document.getElementById("tagP");
const text = document.getElementById("title");
const body = document.querySelector("body");
const btn = document.querySelector("h2");
const Mode = document.getElementById("Fixed");

icon.addEventListener("click",function(){
    this.classList.toggle("fa-moon");
    if(this.classList.toggle("fa-sun")){
        body.style.background = "white";
        icon.style.color = "black";
        text.style.color = "#212A3E";
        tagP.style.color = "#212A3E";
        btn.style.background = "#FFC436";
        body.style.transition = "2s";
        Mode.classList.add("LightSticky");
        Mode.classList.remove("DarkSticky");
        Mode.style.transition = "2s";
        icon.style.transition = "2s";

    }
    else{
        body.style.background = "#06283D";
        icon.style.color = "white";
        text.style.color = "white";
        tagP.style.color = "white";
        btn.style.background = "#1363DF";
        body.style.transition = "2s";
        Mode.classList.add("DarkSticky");
        Mode.classList.remove("LightSticky");
        Mode.classList.remove("bg-white");
        Mode.style.transition = "2s";
        icon.style.transition = "2s";
    }
})
