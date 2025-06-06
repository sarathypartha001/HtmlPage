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

// contact session
 

let ContactButton = document.querySelector(".Contact-button")

ContactButton.addEventListener("click",function(event){
    event.preventDefault();
    let contactInput =  document.querySelectorAll(".contact-input");
    let dataFrame = {};
    contactInput.forEach((input)=>{
        dataFrame[input.name] = input.value
    })
    console.log(dataFrame);
    alert("Datas Send");
    setTimeout(()=>{
      window.location.reload()
    },2000);
});
// contact session end 