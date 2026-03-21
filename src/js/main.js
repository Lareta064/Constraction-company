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
});
(() => {
  const wrappers = document.querySelectorAll('.acordion-wrapper');
  if (!wrappers.length) return;

  // Один ResizeObserver — поддержка динамического контента (картинки, шрифты и т.д.)
  const ro = new ResizeObserver(entries => {
    for (const { target } of entries) {
      const item = target.closest('.acordion-item');
      if (item && item.classList.contains('acordion-item--active')) {
        target.style.maxHeight = target.scrollHeight + 'px';
      }
    }
  });

  function getBody(item){
    // твоя разметка: .acordion-button + .acordion-body
    return item?.querySelector('.acordion-button + .acordion-body') || null;
  }

  function isButton(target, wrapper){
    const btn = target.closest('.acordion-button');
    return btn && wrapper.contains(btn) ? btn : null;
  }

  function openItem(item){
    const body = getBody(item);
    if (!body) return;
    item.classList.add('acordion-item--active');
    body.style.maxHeight = body.scrollHeight + 'px';
  }

  function closeItem(item){
    const body = getBody(item);
    if (!body) return;
    item.classList.remove('acordion-item--active');
    body.style.maxHeight = '0';
  }

  function initWrapper(wrapper){
    // наблюдаем все body внутри враппера
    wrapper.querySelectorAll('.acordion-body').forEach(b => ro.observe(b));

    // если какие-то элементы предустановлены активными — раскроем их
    wrapper.querySelectorAll('.acordion-item.acordion-item--active').forEach(item => {
      const body = getBody(item);
      if (body) body.style.maxHeight = body.scrollHeight + 'px';
    });

    // клик-делегирование
    wrapper.addEventListener('click', (e) => {
      const btn = isButton(e.target, wrapper);
      if (!btn) return;

      const item = btn.closest('.acordion-item');
      const mode = (wrapper.dataset.mode || 'multiple').toLowerCase();

      const isActive = item.classList.contains('acordion-item--active');

      if (mode === 'single') {
        // радиорежим: если клик по уже активному — закрываем всё; иначе закрываем прошлый и открываем новый
        const prev = wrapper.querySelector('.acordion-item--active');
        if (prev && prev !== item) closeItem(prev);

        if (isActive) {
          closeItem(item);            // оставить всё закрытым
        } else {
          openItem(item);             // открыть текущий
        }
      } else {
        // мульти: просто togglе текущего, не трогая другие
        isActive ? closeItem(item) : openItem(item);
      }
    });
  }
  // DOM готов
  document.addEventListener('DOMContentLoaded', () => {
    wrappers.forEach(initWrapper);
  });

  // на full load ещё раз подстроим высоты (для поздно загрузившихся картинок)
  window.addEventListener('load', () => {
    wrappers.forEach(wrapper => {
      wrapper.querySelectorAll('.acordion-item.acordion-item--active').forEach(item => {
        const body = getBody(item);
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      });
    });
  });
})();