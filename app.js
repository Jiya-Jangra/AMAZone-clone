const slides = document.querySelectorAll(".slide") ; 
let currentslide =0 ; 
function showSlide( slideIndex){
    if(slideIndex >= slides.length){
        currentslide = 0 ; 
    }else if(slideIndex < 0 ){
        currentslide = slides.length - 1 ; 
    }else{
        currentslide = slideIndex ; 
    }
    slides.forEach((slide)=>{
        slide.style.display = "none" ; 
    }) ; 
    slides[currentslide].style.display = "block" ; 
}

function previousSlide(){
        showSlide(currentslide-1); 
}
showslide(currentslide) ; 
setInterval(nextSlide,5000); 