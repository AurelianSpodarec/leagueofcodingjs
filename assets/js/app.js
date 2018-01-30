document.addEventListener('DOMContentLoaded', function() {
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
	//	Word Switcher
	//
	///////////////////////////////////////////
	var displayWordSpan = document.querySelector('.switch-word__display');
	var words = ['Coder', 'Creator', 'Entrepreneur', 'Teacher', 'Blogger'];

	var i = 0;
	setInterval(function(){		
			 
 		displayWordSpan.innerHTML = words[i++];
		if (i == words.length) i = 0; 

	}, 1000);



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
	 		

	///////////////////////////////////////////
	//
	//	Change Color Scheme
	//
	///////////////////////////////////////////
	var schemeColorList = document.querySelector('.scheme-color__list');
	var schemeColorOptions = document.querySelectorAll('.scheme-color__option');
	var schemeColorRadio = document.querySelectorAll('.scheme-color__option input');

	var schemeColorPalette = document.querySelectorAll('.scheme-color__palette');
	var schemeColorPaletteBlock = document.querySelectorAll('.scheme-color__palette td');


	schemeColorList.addEventListener('click', function(e) {
		

		if(e.target.className === "scheme-color__option") {
			for (var j = 0; j < schemeColorOptions.length; j++) {
				var optionItem = schemeColorOptions[j];
				optionItem.checked = false;
				optionItem.classList.remove('is-selected');
			}
			e.target.classList.add('is-selected');
			e.target.children[0].checked = true;
			
			var selectedColor = document.querySelector('.scheme-color__option.is-selected').children[2];
			var colors = selectedColor.querySelectorAll('.scheme-color__palette td');
			for (i = 0; i < colors.length; i++) {

			    var pColor = colors[0].style.backgroundColor;
			    var sColor = colors[1].style.backgroundColor;
			    var tColor = colors[2].style.backgroundColor;
			    var qColor = colors[3].style.backgroundColor;
			}

			var styleSheets = document.styleSheets;
	        for (var i = 0; i < styleSheets.length; i++) {
	            var rules = styleSheets[i].cssRules || styleSheets[i].rules;

	            for (var j = 0; j < rules.length; j++) {

	            	 if(rules[j].selectorText === ".site-header") {
	                	rules[j].style.backgroundColor = pColor;
	                } else if (rules[j].selectorText === ".site-nav") {
	                	rules[j].style.backgroundColor = sColor;
	                	rules[j].style.borderColor = tColor;
	                } else if (rules[j].selectorText === ".site-nav__link:hover") {
	                	rules[j].style.backgroundColor = pColor;
	                }
	               
	            }
	        }

		}  			 
	});
					


});