window.onload = function() {
	
	///////////////////////////////////////////
	//
	//	HAMBURGER MENU
	//
	///////////////////////////////////////////
	var btnHamburger = document.querySelector('.site-header__hamburger');
	var siteNav = document.querySelector('.site-nav');

	btnHamburger.addEventListener('click', function() {
		siteNav.classList.toggle('is-active');
		btnHamburger.classList.toggle('is-active');
	});


	///////////////////////////////////////////
	//
	//	Change Theme Background
	//
	///////////////////////////////////////////
 	var mainThemeBg = document.querySelector('.main--picture');
 	var mainThemeBgList = document.querySelector('.theme-bg__list');
 	var items = mainThemeBgList.children;
 	var activeItem;

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

 	// mainThemeBgList.addEventListener('mouseout', function(e) {
 	// 		// with class active set the image
 	// 		//var activeImg = 
 	// 		//var itemss = theme-bg__list.children;
 	// 		var itemsss = document.querySelectorAll('theme-bg__item');
 	// 		var activeItem = document.querySelector('is-active');

 	// 		if(items.className === 'is-active') {
 	// 			var img = items.childNodes[0].style.backgroundImage;
 	// 			mainThemeBg.style.backgroundImage = img;
 	// 			console.log(img);
 	// 		}

 	// 		// Parent node == active
 	// 		// var img = e.target;
 	// 		// var item = img.parentNode;

 	// 		// if(item.className === 'is-active') {
 	// 		// 	itemImg = img.style.backgroundImage;
 	// 		// 	console.log(e.itemImg);
 	// 		// 	mainThemeBg.style.backgroundImage = itemImg;
 	// 		// }

 	// 		// for (var i = 0; i < items.length; i++) {
	 // 		// 	if (items[i].className === 'is-active') {
	 		
	 // 		// 		var itemImg = items[i].style.backgroundImage;
 	// 		// 		mainThemeBg.style.backgroundImage = itemImg;
 	// 		// 	}
	 // 		// }
 	// 		//if(items.className === 'is-active') {
 	// 			//console.log(e.items);
 	// 			// for(var i = 0; i < items.length; i++) {
 	// 			// 	var item = items[i];
 	// 			// 	var itemImg = item.style.backgroundImage;
 	// 			// 	mainThemeBg.style.backgroundImage = itemImg;
 	// 			// }
	 // 		// 	var getImg = items.style.backgroundImage;
		// 		// mainThemeBg.style.backgroundImage = getImg;
		// 	//}
 		 
 	// });


}