const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables
let i = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

//flèches
arrowRight.addEventListener("click", function() {
	// défilement vers la droite
		i = (i + 1) % slides.length;
		bannerSlide(i);
});


arrowLeft.addEventListener("click", function() {
	// défilement vers la gauche
		i = (i - 1 + slides.length) % slides.length;
		bannerSlide(i);
});

// Fonction de défilement
function bannerSlide(index) {
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[index].image}`; // changement de l'image
	document.querySelector("#banner p").innerHTML = slides[index].tagLine; // changement du texte
	uptadeDots(index);
}
function uptadeDots(index) {
	const dots = document.querySelectorAll('.dot')
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	})
}


