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
        // first point
        contentposthead1: "Hotel Overview",
        contentInsidePointul1One: "Location : Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
        contentInsidePointul1Two: "Setting : Nestled beside a stream, providing a tranquil environment close to nature.",
        // second point
        contentposthead2: "Room Types & Feature",
        contentInsidePointul2One: "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
        contentInsidePointul2Two: "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
        contentInsidePointul2Three: "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
        contentInsidePointul2_Four: "Common Amenities:",
        contentInsidePointul2_ul1_One: "Television",
        contentInsidePointul2_ul1_Two: "Free Wi-Fi",
        contentInsidePointul2_ul1_Three: "Attached bathroom",
        contentInsidePointul2_ul1_Four: "Seating area",
        contentInsidePointul2_ul1_Five: "Daily housekeeping",
        contentInsidePointul2_ul1_Six: "24-hour room service",
        // third point
        contentposthead3: "Dining Options",
        contentInsidePointul3One: "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
        contentInsidePointul3Two: "Garden Restaurant: An open-air dining experience amidst nature.",
        contentInsidePointul3Three: "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day.",
        // fourth Point
        contentposthead4: "Amenities & Services",
        contentInsidePointul4One: "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
        contentInsidePointul4Two: "GHousekeeping: Daily housekeeping to maintain cleanliness.",
        contentInsidePointul4Three: "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
        contentInsidePointul4Four: "Taxi Service: Available for guest convenience.",
        contentInsidePointul4Five: "Deluxe Room:Bonfire & Barbecue: Organized upon request, ideal for group gatherings.",
        // fifith Point
        contentposthead5: "Booking",
        contentInsidePointul5One: "Check-in/Check-out: Check-in at 10:00 AM and check-out at 10:00 AM.",
        // images slide 
        images: ["images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
        ],
    },
    2: {
        title: "Hotel Summer Palace",
        // first point
        contentposthead1: "Hotel Overview",
        contentInsidePointul1One: "Location : Summer Palace (Yogi Rooms.Online) is a budget-friendly accommodation located at 5/27-4, Laws Ghat Road, Moonjikkal, Kodaikanal, Tamil Nadu 624101.",
        contentInsidePointul1Two: "Situated approximately 0.91 km from the city center, it offers convenient access to popular attractions such as Bryant Park, Kodaikanal Lake, and Coaker's Walk.",
        // second point
        contentposthead2: "Room Types & Feature",
        contentInsidePointul2One: "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
        contentInsidePointul2Two: "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
        contentInsidePointul2Three: "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
        contentInsidePointul2_Four: "Common Amenities:",
        contentInsidePointul2_ul1_One: "Television",
        contentInsidePointul2_ul1_Two: "Free Wi-Fi",
        contentInsidePointul2_ul1_Three: "Attached bathroom",
        contentInsidePointul2_ul1_Four: "Seating area",
        contentInsidePointul2_ul1_Five: "Daily housekeeping",
        contentInsidePointul2_ul1_Six: "24-hour room service",
        // third point
        contentposthead3: "Dining Options",
        contentInsidePointul3One: "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
        contentInsidePointul3Two: "Garden Restaurant: An open-air dining experience amidst nature.",
        contentInsidePointul3Three: "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day.",
        // fourth Point
        contentposthead4: "Amenities & Services",
        contentInsidePointul4One: "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
        contentInsidePointul4Two: "GHousekeeping: Daily housekeeping to maintain cleanliness.",
        contentInsidePointul4Three: "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
        contentInsidePointul4Four: "Taxi Service: Available for guest convenience.",
        contentInsidePointul4Five: "Deluxe Room:Bonfire & Barbecue: Organized upon request, ideal for group gatherings.",
        // fifith Point
        contentposthead5: "Booking",
        contentInsidePointul5One: "Check-in/Check-out: Check-in at 11:00 AM and check-out at 10:00 AM.",
        // images 
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
        ],
    },
    3: {
        title: "moonlit Abode Cottage",
        // first point
        contentposthead1: "Hotel Overview",
        contentInsidePointul1One: "Location : Situated approximately 0.8 km from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
        contentInsidePointul1Two: "Setting : Nestled beside a stream, providing a tranquil environment close to nature.",
        // second point
        contentposthead2: "Room Types & Feature",
        contentInsidePointul2One: "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
        contentInsidePointul2Two: "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
        contentInsidePointul2Three: "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
        contentInsidePointul2_Four: "Common Amenities:",
        contentInsidePointul2_ul1_One: "Television",
        contentInsidePointul2_ul1_Two: "Free Wi-Fi",
        contentInsidePointul2_ul1_Three: "Attached bathroom",
        contentInsidePointul2_ul1_Four: "Seating area",
        contentInsidePointul2_ul1_Five: "Daily housekeeping",
        contentInsidePointul2_ul1_Six: "24-hour room service",
        // third point
        contentposthead3: "Dining Options",
        contentInsidePointul3One: "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
        contentInsidePointul3Two: "Garden Restaurant: An open-air dining experience amidst nature.",
        contentInsidePointul3Three: "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day.",
        // fourth Point
        contentposthead4: "Amenities & Services",
        contentInsidePointul4One: "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
        contentInsidePointul4Two: "GHousekeeping: Daily housekeeping to maintain cleanliness.",
        contentInsidePointul4Three: "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
        contentInsidePointul4Four: "Taxi Service: Available for guest convenience.",
        contentInsidePointul4Five: "Deluxe Room:Bonfire & Barbecue: Organized upon request, ideal for group gatherings.",
        // fifith Point
        contentposthead5: "Booking",
        contentInsidePointul5One: "Check-in/Check-out: Check-in at 11:00 AM and check-out at 10:00 AM.",
        // images 
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
    4: {
        title: "Rainbow Cottage",
       // first point
       contentposthead1: "Hotel Overview",
       contentInsidePointul1One: "Location : Situated approximately 0.8 km from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
       contentInsidePointul1Two: "Setting : Nestled beside a stream, providing a tranquil environment close to nature.",
       // second point
       contentposthead2: "Room Types & Feature",
       contentInsidePointul2One: "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
       contentInsidePointul2Two: "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
       contentInsidePointul2Three: "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
       contentInsidePointul2_Four: "Common Amenities:",
       contentInsidePointul2_ul1_One: "Television",
       contentInsidePointul2_ul1_Two: "Free Wi-Fi",
       contentInsidePointul2_ul1_Three: "Attached bathroom",
       contentInsidePointul2_ul1_Four: "Seating area",
       contentInsidePointul2_ul1_Five: "Daily housekeeping",
       contentInsidePointul2_ul1_Six: "24-hour room service",
       // third point
       contentposthead3: "Dining Options",
       contentInsidePointul3One: "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
       contentInsidePointul3Two: "Garden Restaurant: An open-air dining experience amidst nature.",
       contentInsidePointul3Three: "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day.",
       // fourth Point
       contentposthead4: "Amenities & Services",
       contentInsidePointul4One: "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
       contentInsidePointul4Two: "GHousekeeping: Daily housekeeping to maintain cleanliness.",
       contentInsidePointul4Three: "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
       contentInsidePointul4Four: "Taxi Service: Available for guest convenience.",
       contentInsidePointul4Five: "Deluxe Room:Bonfire & Barbecue: Organized upon request, ideal for group gatherings.",
       // fifith Point
       contentposthead5: "Booking",
       contentInsidePointul5One: "Check-in/Check-out: Check-in at 11:00 AM and check-out at 10:00 AM.",
       // images 
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
    5: {
        title: "Serenity Stay Cottage",
        // first point
        contentposthead1: "Hotel Overview",
        contentInsidePointul1One: "Location : Situated approximately 0.8 km from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
        contentInsidePointul1Two: "Setting : Nestled beside a stream, providing a tranquil environment close to nature.",
        // second point
        contentposthead2: "Room Types & Feature",
        contentInsidePointul2One: "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
        contentInsidePointul2Two: "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
        contentInsidePointul2Three: "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
        contentInsidePointul2_Four: "Common Amenities:",
        contentInsidePointul2_ul1_One: "Television",
        contentInsidePointul2_ul1_Two: "Free Wi-Fi",
        contentInsidePointul2_ul1_Three: "Attached bathroom",
        contentInsidePointul2_ul1_Four: "Seating area",
        contentInsidePointul2_ul1_Five: "Daily housekeeping",
        contentInsidePointul2_ul1_Six: "24-hour room service",
        // third point
        contentposthead3: "Dining Options",
        contentInsidePointul3One: "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
        contentInsidePointul3Two: "Garden Restaurant: An open-air dining experience amidst nature.",
        contentInsidePointul3Three: "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day.",
        // fourth Point
        contentposthead4: "Amenities & Services",
        contentInsidePointul4One: "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
        contentInsidePointul4Two: "GHousekeeping: Daily housekeeping to maintain cleanliness.",
        contentInsidePointul4Three: "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
        contentInsidePointul4Four: "Taxi Service: Available for guest convenience.",
        contentInsidePointul4Five: "Deluxe Room:Bonfire & Barbecue: Organized upon request, ideal for group gatherings.",
        // fifith Point
        contentposthead5: "Booking",
        contentInsidePointul5One: "Check-in/Check-out: Check-in at 11:00 AM and check-out at 10:00 AM.",
        // images 
        images: ["images/silverspring1.jpg","images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                 "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"],
    },
}

if (posts[postId]) {
    const post = posts[postId];
    
    const singleposttitle = document.querySelector(".single-post-head")
      singleposttitle.textContent = post.title;
    //  this term is heading  
    document.querySelector(".single-post-content-head1").textContent = post.contentposthead1;
    document.querySelector(".single-post-content-head2").textContent = post.contentposthead2;
    document.querySelector(".single-post-content-head3").textContent = post.contentposthead3;
    document.querySelector(".single-post-content-head4").textContent = post.contentposthead4;
    document.querySelector(".single-post-content-head5").textContent = post.contentposthead5;

    // first point Content
    document.querySelector(".ul1-li1").textContent = post.contentInsidePointul1One;
    document.querySelector(".ul1-li2").textContent = post.contentInsidePointul1Two;           
    
    // second point content
    document.querySelector(".ul2-li1").textContent = post.contentInsidePointul2One;
    document.querySelector(".ul2-li2").textContent = post.contentInsidePointul2Two;
    document.querySelector(".ul2-li3").textContent = post.contentInsidePointul2Three;
    document.querySelector(".ul2-li4").textContent = post.contentInsidePointul2_Four;
    document.querySelector(".ul2-ul1-li1").textContent = post.contentInsidePointul2_ul1_One;
    document.querySelector(".ul2-ul1-li2").textContent = post.contentInsidePointul2_ul1_Two;
    document.querySelector(".ul2-ul1-li3").textContent = post.contentInsidePointul2_ul1_Three;
    document.querySelector(".ul2-ul1-li4").textContent = post.contentInsidePointul2_ul1_Four;
    document.querySelector(".ul2-ul1-li5").textContent = post.contentInsidePointul2_ul1_Five;
    document.querySelector(".ul2-ul1-li6").textContent = post.contentInsidePointul2_ul1_Six;
    
    // third point content
    document.querySelector(".ul3-li1").textContent = post.contentInsidePointul3One;
    document.querySelector(".ul3-li2").textContent = post.contentInsidePointul3Two;
    document.querySelector(".ul3-li3").textContent = post.contentInsidePointul3Three; 

    // fourth points
    document.querySelector(".ul4-li1").textContent = post.contentInsidePointul4One;
    document.querySelector(".ul4-li2").textContent = post.contentInsidePointul4Two;
    document.querySelector(".ul4-li3").textContent = post.contentInsidePointul3Three;
    document.querySelector(".ul4-li4").textContent = post.contentInsidePointul4Four;
    document.querySelector(".ul4-li5").textContent = post.contentInsidePointul4Five;
    
    // fifth points
    document.querySelector(".ul5-li1").textContent = post.contentInsidePointul5One;    
     
    const slidercontainer = document.querySelector(".slider-container");
    
    post.images.forEach(image=> {
        const img = document.createElement("img");
        img.src = image;
        slidercontainer.appendChild(img)
    });
}

}


// single post session end 