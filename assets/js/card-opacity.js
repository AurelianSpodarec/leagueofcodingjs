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