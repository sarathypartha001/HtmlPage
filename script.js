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

function changeImages(index){
    let homeImages = document.querySelector(".home-image");

    homeImages.style.backgroundImage = `URL('${images[index]}')`;
}
// home session end
// single post session
// Add this to your script.js
document.addEventListener('DOMContentLoaded', () => {

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

    document.querySelectorAll('.post-edit').forEach(post => observer.observe(post)); 
});

// single post session end 