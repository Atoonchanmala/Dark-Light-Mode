const icon = document.querySelector("i");
const text = document.querySelectorA("p");
const span = document.querySelector("span");
const body = document.querySelector("body");

icon.addEventListener("click",function(){
    this.classList.toggle("fa-moon");
    if(this.classList.toggle("fa-sun")){
        body.style.background = "white";
        icon.style.color = "black";
    }
    else{
        body.style.background = "black";
        icon.style.color = "white";
        text.style.color = "white";
        span.style.color = "white"; 
    }
})

// ມື້ອື່ນຕໍ່ການປ່ຽນສີຂອງຕົວໜັງສື tag P ; button ; ຫລັງຈາກນັ້ນທຳການອັບຂື້ນ github