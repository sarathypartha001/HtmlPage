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
                "images/silversping8.jpg","images/silverspring.jpg","images/silverspring1.jpg","images/silverspring2.jpg","images/silverspring3.jpg",
                "images/silverspring4.jpg","images/silverspring5.jpg","images/silverspring6.jpg","images/silverspring7.jpg"
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
                    heading: "🌄 Hotel Summer Palace – Kodaikanal Overview",
                    items: [
                        "🏨 General Information",
                        [
                            "Name: Hotel Summer Palace",
                            "Location: Kodaikanal, Tamil Nadu, India",
                            "Category: Premium budget to mid-range hotel",
                            "Type: Family-friendly / Couple getaway / Nature resort"
                        ],
                    ]
                },
                {
                    heading: "🛌 Rooms & Amenities",
                    items: [
                        "Deluxe comfort, premium views",
                        "Cozy wooden interior elegance",
                        "Reliable seasonal room heating",
                        "Wi-Fi enabled smart stays",
                        "Power backup, seamless service"
                    ]
                },
                {
                    heading: "🏞️ Nearby Attractions",
                    items: [
                        "Kodaikanal Lake - 3 km",
                        "Pillar Rocks - 6 km",
                        "Green Valley View (Suicide Point) - 5 km",
                        "Berijam Lake (with permit) - 20 km",
                        "Silver Cascade Falls - 8 km"
                    ]
                },
                {
                    heading: "🌟 Why Choose Hotel Summer Palace in Kodaikanal?",
                    items: [
                        "Ideal for peaceful retreats, nature lovers, and romantic getaways.",
                        "High guest satisfaction due to warm hospitality.",
                        "Located away from the noisy town center, yet close enough for convenience.",
                        "Loved by repeat travelers for its serene location and personalized care."
                    ]
                },
              
            ],
            images: [
                "images/summarpalace 1.jpg","images/summarpalace.jpeg"
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
                    heading: "🌙 Moonlit Abode Cottage - Overview",
                    items: [
                        "Location: W9/960A, Vala Kattu Odai, Pallangi Road, Kodaikanal, Tamil Nadu, India",
                        "Type: Spacious 6-bedroom holiday home accommodating up to 19 guests",
                        "Setting: Nestled amidst rolling hills with mountain and garden views"
                    ]
                },
                {
                    heading: "🛏️ Accommodation Details",
                    items: [
                        "Bedrooms: 6 bedrooms, each with a queen-sized bed",
                        "Living Areas: 2 living rooms with sofa beds",
                        "Bathrooms: 6 bathrooms equipped with bathtubs, showers, and free toiletries",
                        "Dining: Separate dining area with electric kettle for self-catering",
                        "Balcony: Private balcony offering scenic view"
                    ],
                    imagesContent: ["images/moonlit7.jpeg"]
                },
                {
                    heading: "🛎️ Amenities and Services",
                    items: [
                        "Connectivity: Free Wi-Fi throughout the property",
                        "Entertainment: Flat-screen TV with satellite channels",
                        "Comfort: Air conditioning and heating",
                        "Outdoor Facilities:",
                        [
                          "BBQ facilities",
                          "Garden and terrace"
                        ],
                        "Parking: Free private parking on-site",
                        "Breakfast: Vegetarian breakfast available",
                        "Child-Friendly: Suitable for families with children",
                        "Safety: Non-smoking rooms and smoke-free property"
                    ]
                },
                {
                    heading: "📍 Nearby Attractions",
                    items: [
                        "Chettiar Park: Approximately 7.2 km away",
                        "Bear Shola Falls: Around 7.4 km distance",
                        "Kodaikanal Lake: Approximately 7.4 km away",
                        "Bryant Park: About 8.2 km distance",
                        "Coaker's Walk: Approximately 8.4 km away"
                    ]
                },
              
            ],
            images: [
            "images/moonlit.jpeg","images/moonlit1.jpeg","images/moonlit10.jpeg","images/moonlit2.jpeg","images/moonlit3.jpeg","images/moonlit4.jpeg",
            "images/moonlit5.jpeg","images/moonlit6.jpeg","images/moonlit7.jpeg","images/moonlit8.jpeg","images/moonlit9.jpeg"
            ],
            mapDetails: [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.9035418918747!2d77.4730344!3d10.2693555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0767f22a59a963%3A0x53d728470a3ccd4a!2sMoonlit%20Abode!5e0!3m2!1sen!2sin!4v1746259441814!5m2!1sen!2sin"
            ],
            feedbackquestions: [
                {
                    heading: "FeedBack About Moonlite Adobe Cottage",
                    questions: [
                        { question: "Was the check-in process smooth and timely?", type: "yesno" },
                        { question: "Was your room clean and well-maintained?", type: "yesno" },
                        { question: "How would you rate the comfort of the room?", type: "options", options: ["Excellent", "Good", "Average", "Poor"] },
                        { question: "Was hot water available when needed?", type: "yesno" },
                        { question: "Was the cottage location convenient for sightseeing?", type: "yesno" },
                        { question: "Overall, how would you rate your stay?", type: "stars" }
                    ]
                }
            ]
        },
        // fourth Hotel
        4: {
            title: "Rainbow Cottage",
            points: [
                {
                    heading: "🌈 Rainbow Cottage - Key Details",
                    items: [
                        "📍 Location: Near Kodaikanal Lake, Kodaikanal, Tamil Nadu, India",
                        "⭐Rating: 8.0/10 (Very Good)",
                        "Ideal For: Travelers seeking a peaceful retreat in a tranquil environment"
                    ]
                },
                {
                    heading: "🛏️ Accommodation & Amenities",
                    items: [
                        "Room Types",
                        [
                          "Double Cot Deluxe",
                          "Double Cot Semi Deluxe",
                          "Four Bedded Deluxe",
                          "Double Cot Executive"
                        ],
                    ],
                    imagesContent: ["images/rainbow cottage 2.jpeg"]

                },
                {
                    heading: "Food & Dining",
                    items: [
                        "On-site restaurant offering vegetarian and non-vegetarian meals",
                        "Meals include Breakfast, Evening Snacks, and Dinner",
                        "Cuisines: North Indian, South Indian, Chinese, Local",
                        "Complimentary cook service for customized meals"
                    ]
                },
                {
                    heading: "Amenities & Services",
                    items: [
                        "Free Wi-Fi",
                        "24-hour Room Service",
                        "Daily Housekeeping",
                        "Laundry Service",
                        "Caretaker Available",
                        "Dining Area",
                        "Terrace with Seating Area",
                        "Garden"
                    ]
                },
              
            ],
            images: [
                "images/rainbow cottage 1.jpeg","images/rainbow cottage 2.jpeg","images/Rainbow Cottage 3.jpg"
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
                    heading: "📌 Location",
                    items: [
                        "Located near Attuvampatti, Kodaikanal - a serene and less crowded area, ideal for a peaceful stay."
                    ],
                },
                {
                    heading: "🌟 Cottage Features",
                    items: [
                        "🛏️ Spacious Rooms - 2 & 3 BHK fully furnished cottages with warm lighting and wooden interiors.",
                        "🔥 Private Fireplace - Cozy up during chilly evenings.",
                        "🪟 Balcony Views - Overlooks lush valleys and morning mist scenery.",
                        "🛋️ Private Living Space - Living room with sofas, TV, and dining area.",
                        "🧼 Attached Bathrooms - Western-style toilets, geysers for hot water.",
                        "🍳 In-House Kitchen - Includes gas stove, utensils, fridge, and water heater for self-cooking.",
                        "🧹 Daily Housekeeping - Clean and well-maintained by dedicated staff."
                    ],
                    imagesContent: ["images/rainbow cottage 1.jpeg"]
                },
                {
                    heading: "🛎️ Guest Services",
                    items: [
                        "🚗 Free Private Parking - Safe and dedicated parking next to the cottage.",
                        "📡 Wi-Fi Enabled - High-speed internet available throughout the property.",
                        "📺 Smart TVs - OTT apps like Netflix, YouTube, and Prime pre-installed.",
                        "🧑‍🍳 On-Call Caretaker - Available for assistance, local help, or food orders.",
                        "🛵 Food Delivery - Local homemade meals can be arranged on request."
                    ]
                },
                {
                    heading: "🌿 Environment & Extras",
                    items: [
                        "🌄 Scenic Location - Surrounded by pine trees, valleys, and quiet trails.",
                        "🔇 Noise-Free Zone - Away from city crowd, perfect for nature lovers.",
                        "🐾 Pet-Friendly - Pets allowed on prior request (with conditions).",
                        "🔐 Fully Secure - Gated property with 24/7 surveillance in some units."
                    ]
                },
              
            ],
            images: [
                "images/silverspring1.jpg", "images/silverspring2.jpg"
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

        const contentContainer = document.querySelector(".single-post-content");
        contentContainer.innerHTML = "";

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
                    nestedUl.classList.add("single-post-content-inside-ul");
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
            if (section.imagesContent) {
                section.imagesContent.forEach(image => {
                    const img = document.createElement("img");
                    img.src = image;
                    img.classList.add("post-section-image-content");
                    contentContainer.appendChild(img);
                });
            }
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
        
        // Feedback section
        const feedbackContainer = document.querySelector(".single-post-feedback");
feedbackContainer.innerHTML = "";

if (post.feedbackquestions && post.feedbackquestions.length > 0) {
    const form = document.createElement("form");
    form.id = "feedbackForm";

    const questionData = []; // Store {question, name} mapping

    post.feedbackquestions.forEach(feedback => {
        const heading = document.createElement("h2");
        heading.classList.add("single-post-feedback-head");
        heading.textContent = feedback.heading;
        form.appendChild(heading);

        feedback.questions.forEach((q, index) => {
            const questionEl = document.createElement("div");
            questionEl.classList.add("feedback-question");

            const label = document.createElement("label");
            label.textContent = q.question;
            label.setAttribute("for", `q${index}`);
            questionEl.appendChild(label);

            questionData.push({ name: `q${index}`, question: q.question });

            if (q.type === "yesno" || q.type === "options") {
                const options = q.type === "yesno" ? ["Yes", "No"] : q.options;
                options.forEach(opt => {
                    const label = document.createElement("label");

                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = `q${index}`;
                    input.value = opt;
                    input.required = true;

                    label.appendChild(input);
                    label.append(" " + opt);
                    questionEl.appendChild(label);
                });
            } else if (q.type === "stars") {
                const starWrapper = document.createElement("div");
                starWrapper.classList.add("star-rating");
                for (let i = 5; i >= 1; i--) {
                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = `q${index}`;
                    input.value = `${i} Star`;
                    input.id = `star${i}-${index}`;
                    input.required = true;

                    const label = document.createElement("label");
                    label.setAttribute("for", `star${i}-${index}`);
                    label.title = `${i} star`;
                    label.textContent = "★";

                    starWrapper.appendChild(input);
                    starWrapper.appendChild(label);
                }
                questionEl.appendChild(starWrapper);
            }

            form.appendChild(questionEl);
        });
    });

    // Submit Button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit Feedback";
    submitBtn.classList.add("submit-feedback-btn");
    form.appendChild(submitBtn);

    // Success Message
    const thankYou = document.createElement("div");
    thankYou.classList.add("thank-you-message");
    thankYou.style.display = "none";
    thankYou.textContent = "✅ Thank you for your feedback!";
    feedbackContainer.appendChild(thankYou);

    feedbackContainer.appendChild(form);

    // Handle Form Submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const resultLines = [];

        questionData.forEach(q => {
            const value = formData.get(q.name);
            if (value) {
                resultLines.push(`${q.question}: ${value}`);
            }
        });

        const message = resultLines.join("\n");

        // Send to FormSubmit (no backend)
        fetch("https://formsubmit.co/ajax/parthasarathya001@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                _subject: post.feedbackquestions[0].heading,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            form.style.display = "none";
            thankYou.style.display = "block";
        })
        .catch(error => alert("Error sending feedback. Please try again."));
    });
}
    }
}

 // single post session end
