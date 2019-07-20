/*----------------Responsive-----------------*/

document.addEventListener("DOMContentLoaded", function(){
	let widthFb = document.getElementById('width-facebook');
	let getWidthFb = window.getComputedStyle(widthFb).width;
	console.log(getWidthFb);
});