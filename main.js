let img = document.querySelector(".img-onlaud")
let h1 = document.querySelector(".chicken")
let header = document.querySelector("header")
let container = document.querySelector(".container-1")
let btn_container = document.querySelector(".btn-container")
let container2 = document.querySelector(".container-2")




window.onload = function(){
    if (window.innerWidth<=900){
        h1.style.left = "0"
        // console.log(window.innerWidth)
        setTimeout(() => {
            container.style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            container.style.background = "rgb(240, 237, 237)"
        }, 2000);
    }else {
        img.style.right = "10%"
        h1.style.left = "10%"
        setTimeout(() => {
            container.style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            container.style.background = "rgb(240, 237, 237)"
        }, 3500);
    }

}



window.onscroll = function(){
    console.log(scrollY)
    if (scrollY>=28){
        header.style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    }
    if (scrollY<=28){
        header.style.boxShadow = "none"
    }
    if (window.innerWidth<=680){
        if (scrollY>=100){
            container2.style.opacity = "1"
            container2.style.top = "0"
        }
    }else{
    if (scrollY>=500){
        container2.style.opacity = "1"
        container2.style.top = "0"
    }
}
}