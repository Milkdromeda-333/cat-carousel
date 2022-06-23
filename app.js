/*
In this project i am making a gallery courousel, to switch between images, ill create an array of images, and make a event listener for the buttons,
each time the forward button is clicked, it iterates over another array ofnumbers that equals the length of images in the array.
*/

const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");
let gallery = document.getElementsByClassName("cat-gallery")[0];

const images = [
	"url(https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
	"url(https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
	"url(https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80)",
	"url(https://images.unsplash.com/photo-1591608971376-46e64aa7fd19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80)",
	"url(https://images.unsplash.com/photo-1616249022368-e3ce55dd3bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
	"url(https://images.unsplash.com/photo-1567484072688-2041f76a3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
];

let counter = 0;
forwardArrow.addEventListener("click", () => {
	counter++;
	if (counter === images.length) {
		counter = 0; // so that it eill start over at the beginning
	}
	gallery.style.backgroundImage = images[counter];

});

backArrow.addEventListener("click", () => {
	counter--;
	gallery.style.backgroundImage = images[counter];

});
