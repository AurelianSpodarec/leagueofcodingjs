///////////////////////////////////////////
//
//	Change Theme Background
//
///////////////////////////////////////////
	var mainThemeBg = document.querySelector('.main--picture'),
		mainThemeBgList = document.querySelector('.theme-bg__list'),
		items = mainThemeBgList.children,
		activeItem;

	mainThemeBgList.addEventListener('mouseover', function(e) {
		
		if (e.target.className === 'theme-bg__img') {
	 	var getImg = e.target.style.backgroundImage;
		mainThemeBg.style.backgroundImage = getImg;
		}

	});

	mainThemeBgList.addEventListener('click', function(e) {
		var item = e.target.parentNode;
		
		if (item.className === 'theme-bg__item') {
			for (var i = 0; i < items.length; i++) {
				items[i].classList.remove('is-active');
			}
			item.classList.add('is-active');
			// Get this image ans store it in selected
		}

	});


var listItems  = document.querySelectorAll('.theme-bg__item')

for(var i = 0; i < listItems.length; i++){

	mainThemeBgList.addEventListener('mouseleave', function() {
		var imageItem = document.querySelector('.theme-bg__item.is-active');

		var image = imageItem.children[0].style.backgroundImage;
		mainThemeBg.style.backgroundImage = image;
	})
} 