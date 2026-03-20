document.addEventListener('DOMContentLoaded', function() {
	const bodyEl = document.body;
	const transformCards = document.querySelectorAll('.transform-card');
	if(transformCards.length>0){
		transformCards.forEach((item) =>{
			const itemButton = item.querySelector('.transform-card-btn');
			const itemContent = item.querySelector('.transform-card-content');
			
			itemButton.addEventListener('click', ()=>{
				if(item.classList.contains('is-open')){
					item.classList.remove('is-open');
					if(window.innerWidth > 767){
						itemContent.style.height = '51px';
					}else{
						itemContent.style.height = '136px';
					}
					
				}else{
					item.classList.add('is-open');
					itemContent.style.height = itemContent.scrollHeight + 'px';
				}
			})
		});
	}
	let documentsReview = new Swiper(".review-documents", {
		slidesPerView: 'auto',
		speed: 1000,
		spaceBetween: 10,
		navigation: {
			nextEl: ".review-doc-next",
			prevEl: ".review-doc-prev",
		},
		pagination: {
        el: ".review-documents .swiper-pagination",
      },
	  breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
           slidesPerView: 3,
          spaceBetween:20,
        },
		1200: {
           slidesPerView: 4,
          spaceBetween:20,
        },
		1440: {
           slidesPerView: 4,
           spaceBetween:30,
        },
      },
    });
	let partnersReview = new Swiper(".review-partners", {
		slidesPerView: 'auto',
		speed: 1000,
		spaceBetween: 10,
		navigation: {
			nextEl: ".review-partners-next",
			prevEl: ".review-partners-prev",
		},
		pagination: {
        el: ".review-partners .swiper-pagination",
      },
	  breakpoints: {
       
        1024: {
          
          spaceBetween:20,
        },
		
		1440: {
          
           spaceBetween:30,
        },
      },
    });
	/*FANCYBOX */
	Fancybox.bind("[data-fancybox]", {
	Thumbs: false,

	Toolbar: {
		display: {
		left: [],
		middle: [],
		right: ["close"],
		},
	},

	on: {
		ready: (fancybox) => updateCounter(fancybox),
		"Carousel.change": (fancybox) => updateCounter(fancybox),
	},
	});

	function updateCounter(fancybox) {
	let counter = fancybox.container.querySelector(".my-fancybox-counter");

	if (!counter) {
		counter = document.createElement("div");
		counter.className = "my-fancybox-counter";
		fancybox.container.appendChild(counter);
	}

	const index = fancybox.getSlide()?.index ?? 0;
	const total = fancybox.Carousel?.slides?.length ?? 0;

	counter.textContent = `${index + 1} / ${total}`;
	}
})