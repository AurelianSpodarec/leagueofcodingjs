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


	///////////////////////////////////////////
	//
	//	Change Global Font Size
	//
	///////////////////////////////////////////
	// Get Stylesheets
	// Get the body delete the font size
	// On Body add the new font size with the value

	// Get the value off the options
	// var styleSheetList = document.styleSheets;
	// var bodyFont = document.querySelector('body');
	// //var globalFontSelect = document.querySelector('')
	 		

	// var element = document.querySelector('body'),
 //    style = window.getComputedStyle(element),
 //    fontSize = style.removeProperty('font-size');


	// var css = [];

	// for (var i=0; i<document.styleSheets.length; i++) {
	//     var sheet = document.styleSheets[i];

	//     var rules = ('cssRules' in sheet)? sheet.cssRules : sheet.rules;

	//     if (rules) {
	//         css.push('\n/* Stylesheet : '+(sheet.href||'[inline styles]')+' */');
	//         for (var j=0; j<rules.length; j++) {
	//             var rule = rules[j];
	//             if ('cssText' in rule)
	//                 css.push(rule.cssText);
	//             else
	//                 css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
	//         }
	//     }
	// }
	// var cssInline = css.join('\n')+'\n';
	// console.log(cssInline);



	// var allCSS = [].slice.call(document.styleSheets)
 //        .reduce(function (prev, styleSheet) {
 //            if (styleSheet.cssRules) {
 //                return prev +
 //                    [].slice.call(styleSheet.cssRules)
 //                        .reduce(function (prev, cssRule) {
 //                            return prev + cssRule.cssText;
 //                        }, '');
 //            } else {
 //                return prev;
 //            }
 //        }, '');
 //        console.log(allCSS);

	//bodyFont.style.setProperty('font-size', '8px');
	//bodyFont.CSSRule
	//insertRule("body { font-size: 5px }", 0);
	///////////////////////////////////////////
	//
	//	Change Color Scheme
	//
	///////////////////////////////////////////
	var schemeColorList = document.querySelector('.scheme-color__list');
	var schemeColorOptions = document.querySelectorAll('.scheme-color__option');
	var schemeColorRadio = document.querySelectorAll('.scheme-color__option input');

	// Click on the option, add class is-active and check it's children input

	// schemeColorList.addEventListener('click', function(e) {
	// 	e.stopImmediatePropagation()
	// 	if(e.target.className === 'scheme-color__option') {
	// 		e.stopImmediatePropagation()
	// 		for (var i = 0; i < schemeColorOptions.length; i++) {
	// 			var optionItem = schemeColorOptions[i];
	// 			optionItem.checked = false;
	// 			optionItem.classList.remove('is-selected');
	// 		}
	// 		e.target.children[0].checked = true;
	// 		e.target.classList.add('is-selected');

	// 	}

	// 	// If the children as hit, add the option class is-selected

	// });

	for (var i = 0; i < schemeColorOptions.length; i++) {
		var optionItem = schemeColorOptions[i];

		optionItem.addEventListener('click', function(e) {
			e.stopImmediatePropagation();
			for (var j = 0; j < schemeColorOptions.length; j++) {
				var optionItem = schemeColorOptions[j];
				optionItem.checked = false;
				optionItem.classList.remove('is-selected');
			}
			this.children[0].checked = true;
			this.classList.add('is-selected');
		});

	};




	///////////////////////////////////////////
	//
	//	Change Opacity of Card
	//
	///////////////////////////////////////////
	var mainPageCard = document.querySelector('.main__page-card');
	var opacityRange = document.querySelector('#opacity-card__range');
	var opacityRangeDisplay = document.querySelector('.opacity-card__value');

	//opacityRangeValue


	opacityRange.addEventListener('mousemove', function(e) {
		var opacityRangeValue = opacityRange.value;
		opacityRangeDisplay.textContent = opacityRangeValue;
		mainPageCard.style.backgroundColor =  "rgba(255,255,255, " + opacityRangeValue + ")"; //opacityRangeValue.value;
	});

	opacityRange.addEventListener('click', function(e) {
		var opacityRangeValue = opacityRange.value;
		opacityRangeDisplay.textContent = opacityRangeValue;
	})
	// opacityRangeValue.addEventListener('mouseup', function(){
	// 	opacityRangeDisplay.textContent = opacityRangeValue;.
	// });


}