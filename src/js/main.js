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
})