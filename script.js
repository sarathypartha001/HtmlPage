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
        { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    document.querySelectorAll('.post-edit').forEach(post => observer.observe(post)); // Observe each post
});

// single post session end 