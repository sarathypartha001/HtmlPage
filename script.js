// header Session
let menubaropen = document.querySelector(".menu-bar-opentag");
let sidenavclosebar = document.querySelector(".side-nav-closebar");
let sidenavbar = document.querySelector("#side-nav-bar");

menubaropen.addEventListener("click",function(){
    sidenavbar.style.top="0";
});
sidenavclosebar.addEventListener("click", function(){
    sidenavbar.style.top="-50%";
})
// header session end

// home Section
const images = [
    "images/background1.jpg",
    "images/background\ image\ 3.jpg",
    "images/background\ img\ 4.jpg",
    "images/backgroundimage.jpg",
    "images/backgroundimage2.jpg",
    "images/backgroundimg5.jpg"
]

let currentIndex = 0;
let homeImages = document.querySelector(".home-image");
let homeRadioBtn = document.querySelectorAll(".home-slide-btn input");
let homeslideleft = document.querySelector(".home-slide-left");
let homeslideright = document.querySelector(".home-slide-right");

function changeImage  (index){
   currentIndex = index;
   homeImages.style.backgroundImage = `url('${images[currentIndex]}')`
   homeRadioBtn[currentIndex].checked = true;
}

function autoSlide(){
    currentIndex = (currentIndex+1)%images.length
    changeImage(currentIndex);
}

let slideIntervel = setInterval(autoSlide, 4000);

homeRadioBtn.forEach((radioBtn , index)=>{
    radioBtn.addEventListener("click",()=>{
        clearInterval(slideIntervel);
        changeImage(index);
        slideIntervel = setInterval(autoSlide, 4000); 
    })
})

homeslideleft.addEventListener("click", ()=>{
    clearInterval(slideIntervel);
    currentIndex = (currentIndex - 1 +images.length)%images.length;
    changeImage(currentIndex);
    slideIntervel = setInterval(autoSlide, 4000)
})

homeslideright.addEventListener("click", ()=>{
    clearInterval(slideIntervel);
    currentIndex = (currentIndex + 1 )%images.length;
    changeImage(currentIndex);
    slideIntervel = setInterval(autoSlide, 4000);
})

// home session end

// single post session

document.addEventListener('DOMContentLoaded', () => {
 
    let postEdit = document.querySelectorAll('.post-edit')
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                    entry.target.classList.remove('hidden');
                }else{
                    entry.target.classList.remove('visible');
                    entry.target.classList.add('hidden');
                }
            });
        },
        { threshold: 0.2 } 
    );

    postEdit.forEach(post => observer.observe(post)); 
});

// single post session end 