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

// single post seesion 
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const posts = {
        1: {
            title: "Hotel Silver Spring",
            points: [
                {
                    heading: "Hotel Overview",
                    items: [
                        "Location: Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
                        "Setting: Nestled beside a stream, providing a tranquil environment close to nature."
                    ]
                },
                {
                    heading: "Room Types & Features",
                    items: [
                        "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
                        "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
                        "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
                        "Common Amenities:",
                        [
                            "Television",
                            "Free Wi-Fi",
                            "Attached bathroom",
                            "Seating area",
                            "Daily housekeeping",
                            "24-hour room service"
                        ]
                    ]
                },
                {
                    heading: "Dining Options",
                    items: [
                        "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
                        "Garden Restaurant: An open-air dining experience amidst nature.",
                        "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day."
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
                        "Housekeeping: Daily housekeeping to maintain cleanliness.",
                        "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
                        "Taxi Service: Available for guest convenience.",
                        "Deluxe Room: Bonfire & Barbecue: Organized upon request, ideal for group gatherings."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2668179192437!2d77.4960019!3d10.240051500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07665f9e994a6d%3A0x3192c2186e2583d2!2sHotel%20Silver%20Springs!5e0!3m2!1sen!2sin!4v1746259134383!5m2!1sen!2sin"
            ]
            },
        //  second Page
        2: {
            title: "Hotel Summer Palace",
            points: [
                {
                    heading: "Hotel Overview",
                    items: [
                        "Location: Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
                        "Setting: Nestled beside a stream, providing a tranquil environment close to nature."
                    ]
                },
                {
                    heading: "Room Types & Features",
                    items: [
                        "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
                        "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
                        "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
                        "Common Amenities:",
                        [
                            "Television",
                            "Free Wi-Fi",
                            "Attached bathroom",
                            "Seating area",
                            "Daily housekeeping",
                            "24-hour room service"
                        ]
                    ]
                },
                {
                    heading: "Dining Options",
                    items: [
                        "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
                        "Garden Restaurant: An open-air dining experience amidst nature.",
                        "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day."
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
                        "Housekeeping: Daily housekeeping to maintain cleanliness.",
                        "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
                        "Taxi Service: Available for guest convenience.",
                        "Deluxe Room: Bonfire & Barbecue: Organized upon request, ideal for group gatherings."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2793847514727!2d77.4958339!3d10.239036299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767ab31769d97%3A0xb2c4e386be959760!2sSummer%20Palace!5e0!3m2!1sta!2sin!4v1736139666036!5m2!1sta!2sin"
            ]
        },
        // third hotel
        3: {
            title: "moonlit Abode Cottage",
            points: [
                {
                    heading: "Hotel Overview",
                    items: [
                        "Location: Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
                        "Setting: Nestled beside a stream, providing a tranquil environment close to nature."
                    ]
                },
                {
                    heading: "Room Types & Features",
                    items: [
                        "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
                        "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
                        "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
                        "Common Amenities:",
                        [
                            "Television",
                            "Free Wi-Fi",
                            "Attached bathroom",
                            "Seating area",
                            "Daily housekeeping",
                            "24-hour room service"
                        ]
                    ]
                },
                {
                    heading: "Dining Options",
                    items: [
                        "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
                        "Garden Restaurant: An open-air dining experience amidst nature.",
                        "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day."
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
                        "Housekeeping: Daily housekeeping to maintain cleanliness.",
                        "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
                        "Taxi Service: Available for guest convenience.",
                        "Deluxe Room: Bonfire & Barbecue: Organized upon request, ideal for group gatherings."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.9035418918747!2d77.4730344!3d10.2693555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767f22a59a963%3A0x53d728470a3ccd4a!2sMoonlit%20Abode!5e0!3m2!1sen!2sin!4v1746259441814!5m2!1sen!2sin"
            ]
        },
        // fourth Hotel
        4: {
            title: "Rainbow Cottage",
            points: [
                {
                    heading: "Hotel Overview",
                    items: [
                        "Location: Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
                        "Setting: Nestled beside a stream, providing a tranquil environment close to nature."
                    ]
                },
                {
                    heading: "Room Types & Features",
                    items: [
                        "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
                        "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
                        "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
                        "Common Amenities:",
                        [
                            "Television",
                            "Free Wi-Fi",
                            "Attached bathroom",
                            "Seating area",
                            "Daily housekeeping",
                            "24-hour room service"
                        ]
                    ]
                },
                {
                    heading: "Dining Options",
                    items: [
                        "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
                        "Garden Restaurant: An open-air dining experience amidst nature.",
                        "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day."
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
                        "Housekeeping: Daily housekeeping to maintain cleanliness.",
                        "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
                        "Taxi Service: Available for guest convenience.",
                        "Deluxe Room: Bonfire & Barbecue: Organized upon request, ideal for group gatherings."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.14748181373!2d77.508517!3d10.249687000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767003ac2ddc3%3A0x2b17829d1aa1152f!2sRainbow%20Cottage!5e0!3m2!1sen!2sin!4v1746259779857!5m2!1sen!2sin"
            ]
        },
        // fifth Hotel
        5: {
            title: "Serenity Stay Cottage",
            points: [
                {
                    heading: "Hotel Overview",
                    items: [
                        "Location: Situated approximately 1 KM from Kodaikanal's city center, offering easy access to local attractions such as Bryant Park and Kodaikanal Lake.",
                        "Setting: Nestled beside a stream, providing a tranquil environment close to nature."
                    ]
                },
                {
                    heading: "Room Types & Features",
                    items: [
                        "Standard Room: Queen bed, basic amenities, suitable for budget travelers.",
                        "Deluxe Room: Double bed, includes a fireplace and balcony for enhanced comfort.",
                        "Luxury Room: Garden view, equipped with a heater, daily housekeeping, and free Wi-Fi.",
                        "Common Amenities:",
                        [
                            "Television",
                            "Free Wi-Fi",
                            "Attached bathroom",
                            "Seating area",
                            "Daily housekeeping",
                            "24-hour room service"
                        ]
                    ]
                },
                {
                    heading: "Dining Options",
                    items: [
                        "On-site Restaurant: Offers a variety of cuisines including Chinese, Continental, and traditional dishes.",
                        "Garden Restaurant: An open-air dining experience amidst nature.",
                        "24-Hour Coffee Shop: Serves snacks, coffee, and tea throughout the day."
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Parking: Ample parking space available, accommodating even larger vehicles like buses.",
                        "Housekeeping: Daily housekeeping to maintain cleanliness.",
                        "Travel Desk: Assists with travel arrangements and local sightseeing tours.",
                        "Taxi Service: Available for guest convenience.",
                        "Deluxe Room: Bonfire & Barbecue: Organized upon request, ideal for group gatherings."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg",
                "images/silverspring1.jpg", "images/silverspring2.jpg", "images/silverspring3.jpg", "images/silverspring4.jpg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.09629386063!2d77.4784811!3d10.2538173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767e4f699f20b%3A0x6c987facf282fba4!2sSerenity%20Stay!5e0!3m2!1sen!2sin!4v1746259689730!5m2!1sen!2sin"         ]
        },
        
    };

    if (posts[postId]) {
        const post = posts[postId];

        // Set the title
        const singleposttitle = document.querySelector(".single-post-head");
        singleposttitle.textContent = post.title;

        // Container where points will be created dynamically
        const contentContainer = document.querySelector(".single-post-content");
        contentContainer.innerHTML = ""; // clear old contents if any

        post.points.forEach(section => {
            // Create heading
            const heading = document.createElement("h2");
            heading.classList.add("single-post-content-head");
            heading.textContent = section.heading;
            contentContainer.appendChild(heading);

            // Create UL
            const ul = document.createElement("ul");
            ul.classList.add("single-post-content-ul");
            section.items.forEach(item => {
                if (Array.isArray(item)) {
                    const nestedUl = document.createElement("ul");
                    item.forEach(nestedItem => {
                        const nestedLi = document.createElement("li");
                        nestedLi.classList.add("single-post-content-li");
                        nestedLi.textContent = nestedItem;
                        nestedUl.appendChild(nestedLi);
                    });
                    ul.appendChild(nestedUl);
                } else {
                    const li = document.createElement("li");
                    li.classList.add("single-post-content-inside-li");
                    li.textContent = item;
                    ul.appendChild(li);
                }
            });

            contentContainer.appendChild(ul);
        });

        // map details
        const mapid= document.querySelector(".single-post-map");
        mapid.innerHTML = "";
        post.mapDetails.forEach(mapUrl =>{
            const iframe = document.createElement("iframe");
            iframe.classList.add("single-post-map");
            iframe.src= mapUrl;
            iframe.width = "500px";
            iframe.Height = "500px";
            iframe.style.border = "0";
            iframe.allowFullscreen = "";
            iframe.loading = "lazy";
            iframe.referrerpolicy="no-referrer-when-downgrade";
            mapid.appendChild(iframe);
        });
        // map details end
        // Image Slider
        const slidercontainer = document.querySelector(".slider-container");
        slidercontainer.innerHTML = ""; // clear previous images
        post.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            slidercontainer.appendChild(img);
        });
    }
}

 // single post session end
