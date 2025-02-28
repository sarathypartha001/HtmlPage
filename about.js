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

// about session


const images = [
    "images/moonlit5.jpeg",
    "images/summarpalace.jpeg",
    "images/silverspring.jpg",
    "images/Rainbow\ Cottage\ 3.jpg",
    "images/moonlit6.jpeg",
]

let currentdataContainer = 0;
let aboutHomeImg  = document.querySelector(".about-home-image");
let aboutLeftArow =  document.querySelector(".left-arow");
let aboutRightArow = document.querySelector(".right-arow");
let aboutRadioBtn =  document.querySelectorAll(".about-radio-input");

function changeAboutImg(index){
    currentdataContainer = index;
    aboutHomeImg.style.backgroundImage = `url('${images[currentdataContainer]}')`;
    aboutRadioBtn[currentdataContainer].checked = true;
}

function AutoSlide(){
    currentdataContainer = (currentdataContainer+1)%images.length
    changeAboutImg(currentdataContainer)
}

let aboutSlideInterval = setInterval(AutoSlide, 3000);

aboutRadioBtn.forEach((radioBtn, index)=>{
       radioBtn.addEventListener("click",()=>{
          clearInterval(aboutSlideInterval);
          changeAboutImg(index);
          aboutSlideInterval = setInterval(AutoSlide, 3000);
       })
})

aboutLeftArow.addEventListener("click", function(){
    clearInterval(aboutSlideInterval);
    currentdataContainer = (currentdataContainer - 1+images.length)%images.length
    changeAboutImg(currentdataContainer);
    aboutSlideInterval = setInterval(AutoSlide, 3000);
})
aboutRightArow.addEventListener("click", ()=>{
    clearInterval(aboutSlideInterval);
    currentdataContainer = (currentdataContainer + 1)%images.length
    changeAboutImg(currentdataContainer)
    aboutSlideInterval = setInterval(AutoSlide, 3000)
})
// about session end