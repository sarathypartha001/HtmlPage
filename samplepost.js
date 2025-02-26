// header session
let menubaropen = document.querySelector(".menu-bar-opentag");
let sidenavclosebar = document.querySelector(".side-nav-closebar");
let sidenavbar = document.querySelector("#side-nav-bar");

menubaropen.addEventListener("click",function(){
    sidenavbar.style.top="0";
});
sidenavclosebar.addEventListener("click", function(){
    sidenavbar.style.top="-50%";
}) 
// headeer session end 


// single post session 

// single post session  scroll bar
 let sliderContainerImg = document.getElementById("sider-container-box");
 let buttons = document.querySelectorAll(".side-btn");

 sliderContainerImg.addEventListener("Wheel",(event)=>{
    event.preventDefault();
    sliderContainerImg.scrollLeft += event.deltaY * 2;
    sliderContainerImg.style.scrollBehavior = "smooth";
 })


// single post session  scroll bar end
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

const posts = {
   1: {
        title: "Hotel Silver Spring",
        content: "onsectetur laboriosam dicta suscipit ut! Magni, reiciendis doloribus. Ex nobis ad, necessitatibus distinctio voluptatibus fugiat incidunt libero! Eligendi architecto corrupti ab, numquam fugiat fugit ratione necessitatibus qui aperiam repellat voluptatibus tenetur itaque molestias atque aut nostrum facere delectus tempora accusamus molestiae odit temporibus. Pariatur, optio magnam odit repudiandae repellat iusto non, porro quisquam voluptatum nesciunt itaque asperiores nisi? Eum ab delectus, ipsa, molestias amet sit voluptatem vitae tempore consequuntur optio enim! Voluptatibus aperiam provident quisquam beatae odio molestiae doloribus labore, harum illo quas numquam autem est placeat. Laborum ea nobis asperiores cupiditate porro repellendus vitae nisi aliquid libero, esse, a ut, earum nesciunt molestiae consequatur perferendis doloribus culpa itaque totam. Pariatur et vero rerum rem ducimus aspernatur nam numquam unde nesciunt deleniti recusandae perferendis, officiis, eligendi ipsum in est odio sit ratione enim possimus totam beatae dicta! Cumque fugiat ipsa voluptatibus nam assumenda quae deserunt earum tempora ab dolore corrupti similique reiciendis a, aliquam nisi perspiciatis accusamus placeat iste facere ratione non eos voluptate sint. Dolorem, nesciunt deserunt ipsa totam aliquid aut temporibus delectus beatae laborum facilis dolor reiciendis omnis, odit iusto! Facilis, ex, doloribus totam eaque incidunt quis, officiis consequuntur aspernatur pariatur provident in asperiores sit id quasi autem est sequi magnam odio nostrum ullam sapiente odit harum.",
        images: ["images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
        ],
    },
    2: {
        title: "Hotel Summer Palace",
        content: "onsectetur laboriosam dicta suscipit ut! Magni, reiciendis doloribus. Ex nobis ad, necessitatibus distinctio voluptatibus fugiat incidunt libero! Eligendi architecto corrupti ab, numquam fugiat fugit ratione necessitatibus qui aperiam repellat voluptatibus tenetur itaque molestias atque aut nostrum facere delectus tempora accusamus molestiae odit temporibus. Pariatur, optio magnam odit repudiandae repellat iusto non, porro quisquam voluptatum nesciunt itaque asperiores nisi? Eum ab delectus, ipsa, molestias amet sit voluptatem vitae tempore consequuntur optio enim! Voluptatibus aperiam provident quisquam beatae odio molestiae doloribus labore, harum illo quas numquam autem est placeat. Laborum ea nobis asperiores cupiditate porro repellendus vitae nisi aliquid libero, esse, a ut, earum nesciunt molestiae consequatur perferendis doloribus culpa itaque totam. Pariatur et vero rerum rem ducimus aspernatur nam numquam unde nesciunt deleniti recusandae perferendis, officiis, eligendi ipsum in est odio sit ratione enim possimus totam beatae dicta! Cumque fugiat ipsa voluptatibus nam assumenda quae deserunt earum tempora ab dolore corrupti similique reiciendis a, aliquam nisi perspiciatis accusamus placeat iste facere ratione non eos voluptate sint. Dolorem, nesciunt deserunt ipsa totam aliquid aut temporibus delectus beatae laborum facilis dolor reiciendis omnis, odit iusto! Facilis, ex, doloribus totam eaque incidunt quis, officiis consequuntur aspernatur pariatur provident in asperiores sit id quasi autem est sequi magnam odio nostrum ullam sapiente odit harum.",
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
        ],
    },
    3: {
        title: "moonlit Abode Cottage",
        content: "onsectetur laboriosam dicta suscipit ut! Magni, reiciendis doloribus. Ex nobis ad, necessitatibus distinctio voluptatibus fugiat incidunt libero! Eligendi architecto corrupti ab, numquam fugiat fugit ratione necessitatibus qui aperiam repellat voluptatibus tenetur itaque molestias atque aut nostrum facere delectus tempora accusamus molestiae odit temporibus. Pariatur, optio magnam odit repudiandae repellat iusto non, porro quisquam voluptatum nesciunt itaque asperiores nisi? Eum ab delectus, ipsa, molestias amet sit voluptatem vitae tempore consequuntur optio enim! Voluptatibus aperiam provident quisquam beatae odio molestiae doloribus labore, harum illo quas numquam autem est placeat. Laborum ea nobis asperiores cupiditate porro repellendus vitae nisi aliquid libero, esse, a ut, earum nesciunt molestiae consequatur perferendis doloribus culpa itaque totam. Pariatur et vero rerum rem ducimus aspernatur nam numquam unde nesciunt deleniti recusandae perferendis, officiis, eligendi ipsum in est odio sit ratione enim possimus totam beatae dicta! Cumque fugiat ipsa voluptatibus nam assumenda quae deserunt earum tempora ab dolore corrupti similique reiciendis a, aliquam nisi perspiciatis accusamus placeat iste facere ratione non eos voluptate sint. Dolorem, nesciunt deserunt ipsa totam aliquid aut temporibus delectus beatae laborum facilis dolor reiciendis omnis, odit iusto! Facilis, ex, doloribus totam eaque incidunt quis, officiis consequuntur aspernatur pariatur provident in asperiores sit id quasi autem est sequi magnam odio nostrum ullam sapiente odit harum.",
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
    4: {
        title: "Rainbow Cottage",
        content: "onsectetur laboriosam dicta suscipit ut! Magni, reiciendis doloribus. Ex nobis ad, necessitatibus distinctio voluptatibus fugiat incidunt libero! Eligendi architecto corrupti ab, numquam fugiat fugit ratione necessitatibus qui aperiam repellat voluptatibus tenetur itaque molestias atque aut nostrum facere delectus tempora accusamus molestiae odit temporibus. Pariatur, optio magnam odit repudiandae repellat iusto non, porro quisquam voluptatum nesciunt itaque asperiores nisi? Eum ab delectus, ipsa, molestias amet sit voluptatem vitae tempore consequuntur optio enim! Voluptatibus aperiam provident quisquam beatae odio molestiae doloribus labore, harum illo quas numquam autem est placeat. Laborum ea nobis asperiores cupiditate porro repellendus vitae nisi aliquid libero, esse, a ut, earum nesciunt molestiae consequatur perferendis doloribus culpa itaque totam. Pariatur et vero rerum rem ducimus aspernatur nam numquam unde nesciunt deleniti recusandae perferendis, officiis, eligendi ipsum in est odio sit ratione enim possimus totam beatae dicta! Cumque fugiat ipsa voluptatibus nam assumenda quae deserunt earum tempora ab dolore corrupti similique reiciendis a, aliquam nisi perspiciatis accusamus placeat iste facere ratione non eos voluptate sint. Dolorem, nesciunt deserunt ipsa totam aliquid aut temporibus delectus beatae laborum facilis dolor reiciendis omnis, odit iusto! Facilis, ex, doloribus totam eaque incidunt quis, officiis consequuntur aspernatur pariatur provident in asperiores sit id quasi autem est sequi magnam odio nostrum ullam sapiente odit harum.",
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
    5: {
        title: "Cottage",
        content: "onsectetur laboriosam dicta suscipit ut! Magni, reiciendis doloribus. Ex nobis ad, necessitatibus distinctio voluptatibus fugiat incidunt libero! Eligendi architecto corrupti ab, numquam fugiat fugit ratione necessitatibus qui aperiam repellat voluptatibus tenetur itaque molestias atque aut nostrum facere delectus tempora accusamus molestiae odit temporibus. Pariatur, optio magnam odit repudiandae repellat iusto non, porro quisquam voluptatum nesciunt itaque asperiores nisi? Eum ab delectus, ipsa, molestias amet sit voluptatem vitae tempore consequuntur optio enim! Voluptatibus aperiam provident quisquam beatae odio molestiae doloribus labore, harum illo quas numquam autem est placeat. Laborum ea nobis asperiores cupiditate porro repellendus vitae nisi aliquid libero, esse, a ut, earum nesciunt molestiae consequatur perferendis doloribus culpa itaque totam. Pariatur et vero rerum rem ducimus aspernatur nam numquam unde nesciunt deleniti recusandae perferendis, officiis, eligendi ipsum in est odio sit ratione enim possimus totam beatae dicta! Cumque fugiat ipsa voluptatibus nam assumenda quae deserunt earum tempora ab dolore corrupti similique reiciendis a, aliquam nisi perspiciatis accusamus placeat iste facere ratione non eos voluptate sint. Dolorem, nesciunt deserunt ipsa totam aliquid aut temporibus delectus beatae laborum facilis dolor reiciendis omnis, odit iusto! Facilis, ex, doloribus totam eaque incidunt quis, officiis consequuntur aspernatur pariatur provident in asperiores sit id quasi autem est sequi magnam odio nostrum ullam sapiente odit harum.",
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
}

if (posts[postId]) {
    const post = posts[postId];
    
    const singleposttitle = document.querySelector(".single-post-head")
      singleposttitle.textContent = post.title;
    const singlepostcontentpara  = document.querySelector(".single-post-content-para")
      singlepostcontentpara.textContent  = post.content;
    
    const slidercontainer = document.querySelector(".slider-container");
    
    post.images.forEach(image=> {
        const img = document.createElement("img");
        img.src = image;
        slidercontainer.appendChild(img)
    });
}

}


// single post session end 