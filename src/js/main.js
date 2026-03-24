document.addEventListener('DOMContentLoaded', function() {
	const bodyEl = document.body;

    /*open mobile menu */
    const menuButton = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#header-menu-mobile');
    if(mobileMenu){
		function closeMobileMenu(){
			menuButton.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		}
		menuButton.addEventListener('click', ()=> {
		
		if( menuButton.classList.contains('active')){
			closeMobileMenu();
			
		}else{
			menuButton.classList.add('active');
			mobileMenu.classList.add('active');
			bodyEl.classList.add('lock');
		}
		});

		const mobileMenuLinks = mobileMenu.querySelectorAll('.header-menu__item');
		mobileMenuLinks.forEach((item)=>{
			item.addEventListener('click',()=>{ closeMobileMenu()});
		});
		 mobileMenu.addEventListener('click', (e)=>{
			if( mobileMenu == e.target){closeMobileMenu();}
		 })
	}

  /*transform-card*/
	const transformCards = document.querySelectorAll('.transform-card');
	if(transformCards.length>0){
		transformCards.forEach((item) =>{
			const itemButton = item.querySelector('.transform-card-btn');
			const itemContent = item.querySelector('.transform-card-content');
			
			itemButton.addEventListener('click', ()=>{
        console.log('555');
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
  let gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 'auto',
    speed:1000,
    spaceBetween: 20,
    loop: true,
    navigation: {
			nextEl: ".gallery-next",
			prevEl: ".gallery-prev",
		},
		pagination: {
        el: ".gallery-swiper .swiper-pagination",
      },
     breakpoints: {
        1024: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween:0,
        },
     }
  });
	let videoSlider = new Swiper(".video-swiper", {
		slidesPerView: 'auto',
		speed: 1000,
		spaceBetween: 10,
		navigation: {
			nextEl: ".video-next",
			prevEl: ".video-prev",
		},

	  breakpoints: {

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
	/*FANCYBOX */
  const galleryFancybox = document.querySelector('[data-fancybox="gallery"]');
  const teamFancybox = document.querySelector('[data-fancybox="team-video"]');
  const resultFancybox = document.querySelector('[data-fancybox="team-video"]');
  const videoFancybox = document.querySelector('[data-fancybox="video-gallery"]');
  const reviewFancybox = document.querySelector('[data-fancybox="review"]');
 
 if(galleryFancybox){
   Fancybox.bind('[data-fancybox="gallery"]', {
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
 }
  if(teamFancybox){
	Fancybox.bind('[data-fancybox="video-gallery"]', {
	  Thumbs: false,
    Toolbar: {
      display: {
      left: [],
      middle: [],
      right: ["close"],
      },
    }
	});
 }
  if(teamFancybox){
	Fancybox.bind('[data-fancybox="team-video"]', {
	  Thumbs: false,
    Toolbar: {
      display: {
      left: [],
      middle: [],
      right: ["close"],
      },
    }
	});
 }
if(reviewFancybox){
	Fancybox.bind('[data-fancybox="review"]', {
	  Thumbs: false,
    Toolbar: {
      display: {
      left: [],
      middle: [],
      right: ["close"],
      },
    }
	});
 }
Fancybox.bind('[data-fancybox="form-popup"]', {
  Thumbs: false,
  dragToClose: false,

  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"],
    },
  },

  Carousel: {
    Panzoom: {
      touch: false,
      rubberband: false,
      bounce: false,
    },
  },
});
Fancybox.bind('[data-fancybox="search"]', {
    Thumbs: false,
  dragToClose: false,

  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"],
    },
  },

  Carousel: {
    Panzoom: {
      touch: false,
      rubberband: false,
      bounce: false,
    },
  },
  on: {
   ready: (fancybox) => {
      fancybox.container.classList.add("fancybox-search");
    },
    
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest("#popup-close")) {
    Fancybox.close();
  }
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
(() => {
  const wrappers = document.querySelectorAll('.js-drop');
  if (!wrappers.length) return;

  // Один ResizeObserver — поддержка динамического контента (картинки, шрифты и т.д.)
  const ro = new ResizeObserver(entries => {
    for (const { target } of entries) {
      const item = target.closest('.js-drop-item');
      if (item && item.classList.contains('js-drop-item-active')) {
        target.style.maxHeight = target.scrollHeight + 'px';
      }
    }
  });

  function getBody(item){
    // твоя разметка: .acordion-button + .acordion-body
    return item?.querySelector('.js-drop-button + .js-drop-body') || null;
  }

  function isButton(target, wrapper){
    const btn = target.closest('.js-drop-button');
    return btn && wrapper.contains(btn) ? btn : null;
  }

  function openItem(item){
    const body = getBody(item);
    if (!body) return;
    item.classList.add('js-drop-item-active');
    body.style.maxHeight = body.scrollHeight + 'px';
  }

  function closeItem(item){
    const body = getBody(item);
    if (!body) return;
    item.classList.remove('js-drop-item-active');
    body.style.maxHeight = '0';
  }

  function initWrapper(wrapper){
    // наблюдаем все body внутри враппера
    wrapper.querySelectorAll('.js-drop-body').forEach(b => ro.observe(b));

    // если какие-то элементы предустановлены активными — раскроем их
    wrapper.querySelectorAll('.js-drop-item.js-drop-item-active').forEach(item => {
      const body = getBody(item);
      if (body) body.style.maxHeight = body.scrollHeight + 'px';
    });

    // клик-делегирование
    wrapper.addEventListener('click', (e) => {
      const btn = isButton(e.target, wrapper);
      if (!btn) return;

      const item = btn.closest('.js-drop-item');
      const mode = (wrapper.dataset.mode || 'multiple').toLowerCase();

      const isActive = item.classList.contains('js-drop-item-active');

      if (mode === 'single') {
        // радиорежим: если клик по уже активному — закрываем всё; иначе закрываем прошлый и открываем новый
        const prev = wrapper.querySelector('.js-drop-item-active');
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
      wrapper.querySelectorAll('.js-drop-item.js-drop-item-active').forEach(item => {
        const body = getBody(item);
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      });
    });
  });
})();

//MENU OVERFLOW MENU
(() => {
 
  function initOverflowMenu(menuList) {
    const moreItem = menuList.querySelector('.menu-item--more');
    const moreList = moreItem?.querySelector('.menu-more-list');

    if (!moreItem || !moreList) return;

    function getRegularItems() {
      return [...menuList.children].filter(
        item => !item.classList.contains('menu-item--more')
      );
    }

    function resetMenu() {
      moreList.innerHTML = '';
      moreItem.classList.remove('is-active-more');

      getRegularItems().forEach(item => {
        item.classList.remove('is-hidden-by-more');
      });
    }

    function createMoreLink(item) {
      const originalAnchor = item.querySelector(':scope > .menu-link a');
      if (!originalAnchor) return null;

      const li = document.createElement('li');
      li.className = 'submenu-item';

      const a = document.createElement('a');
      a.className = 'submenu-link';
      a.href = originalAnchor.getAttribute('href') || '#!';
      a.textContent = originalAnchor.textContent.trim();

      li.appendChild(a);
      return li;
    }

    function getOuterWidth(element) {
      const styles = window.getComputedStyle(element);
      const marginLeft = parseFloat(styles.marginLeft) || 0;
      const marginRight = parseFloat(styles.marginRight) || 0;

      return element.getBoundingClientRect().width + marginLeft + marginRight;
    }

    function measureMoreWidth() {
      const wasInactive = !moreItem.classList.contains('is-active-more');

      if (wasInactive) {
        moreItem.classList.add('is-active-more');
        moreItem.style.visibility = 'hidden';
        moreItem.style.pointerEvents = 'none';
      }

      const width = getOuterWidth(moreItem);

      if (wasInactive) {
        moreItem.classList.remove('is-active-more');
        moreItem.style.visibility = '';
        moreItem.style.pointerEvents = '';
      }

      return width;
    }

    function updateMenu() {
      resetMenu();

      const regularItems = getRegularItems();
      const menuWidth = menuList.getBoundingClientRect().width;
      const moreWidth = measureMoreWidth();
      const availableWidth = menuWidth - moreWidth;

      let usedWidth = 0;
      const hiddenItems = [];

      regularItems.forEach(item => {
        const itemWidth = getOuterWidth(item);

        if (usedWidth + itemWidth <= availableWidth) {
          usedWidth += itemWidth;
        } else {
          hiddenItems.push(item);
        }
      });

      if (!hiddenItems.length) return;

      moreItem.classList.add('is-active-more');

      hiddenItems.forEach(item => {
        item.classList.add('is-hidden-by-more');

        const clonedItem = createMoreLink(item);
        if (clonedItem) {
          moreList.appendChild(clonedItem);
        }
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      updateMenu();
    });

    resizeObserver.observe(menuList);

    window.addEventListener('resize', updateMenu);
    window.addEventListener('load', updateMenu);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateMenu);
    }

    updateMenu();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-list').forEach(initOverflowMenu);
  });
})();