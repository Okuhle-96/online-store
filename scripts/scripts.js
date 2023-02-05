// Script to initialize all 3rd party plugins, as well as needed functions for the site

// Initialize fullpage Fullpage
new fullpage("#fullpage", {
	anchors: ["home", "products", "reviews", "contact"],
	navigation: true,
	navigationPosition: "left",
	navigationTooltips: ["Home", "Products", "Reviews", "Contact"],
	center: true,
});

//   Init Animate On Scroll
AOS.init();

$(document).ready(function () {
	//   Initialize product slider and set options
	$("#product-slider").owlCarousel({
		items: 5,
		dots: false,
		nav: true,
		loop: true,
		center:true,
		autoplay: true,
		autoplayHoverPause:true,
		slideSpeed: 3000,
		paginationSpeed: 5000,
		smartSpeed:1000,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive: {
		    992: {
			   items: 3
		    },
		    600: {
			   items: 3
		    },
		    320: {
			   items: 1
		    },
		    280: {
			   items: 1
		    }
		}
	 });
});



//   function to open modal
function openModal() {
  document.getElementById("modal").classList.toggle("modal-active");
}

//   Functionality to get random users
// Store URL in variable
let randomUserURL = "https://randomuser.me/api/?results=6";

//   Fetch the data
fetch(randomUserURL)
	.then((res) => res.json()) // Turn response into JSON format
	.then((data) => {
		// Get results from data and store in variable
		let users = data.results;
		// Get testimonial container from HTML
		let testimonialContainer = document.getElementById("testimonial-slider");
		// Loop over users and create testimonial for them
		users.forEach((user) => {
			testimonialContainer.innerHTML += `
					<div class="testimonial">
						<i class="fas fa-quote-left"></i>
						<p class="testimonial-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<img class="testimonial-img" src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
						<h4 class="testimonial-name">${user.name.first} ${user.name.last}</h4>
					</div>
				`;
		});

	//   Initialize testimonial slider
	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		autoplay:true,
		responsive:{
		    0:{
			   items:1
		    },
		    600:{
			   items:2
		    },
		    1000:{
			   items:3
		    }
		}
	 });
});