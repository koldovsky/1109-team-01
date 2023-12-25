const carousel = document.querySelector('.equipment__carousel');
const carouselBox = carousel.querySelector('.eq__carousel-box');  
const moveLeft = carousel.querySelector('.eq__button--prev');
const moveRight = carousel.querySelector('.eq__button--next');

let productDisplay = getProductDisplay();			
let gallery = Array.from(carouselBox.children); 
let currentIndex = productDisplay;

createCarousel();

function getProductDisplay() {
	if (window.innerWidth > 767) return 2;
	return 1;
}

function createCarousel() {
	gallery = gallery.filter(slide => !slide.classList.contains('clone'));

	const clonesStart = gallery.slice(-3).map(cloneSlide);
	const clonesEnd = gallery.slice(0, 3).map(cloneSlide);
	// const clonesStart = gallery.slice(-productDisplay).map(cloneSlide);
	// const clonesEnd = gallery.slice(0, productDisplay).map(cloneSlide);

	carouselBox.append(...clonesStart, ...gallery, ...clonesEnd);

	gallery = Array.from(carouselBox.children);

	updateCarousel();
}

function cloneSlide(slide) {
	const clone = slide.cloneNode(true);
	clone.classList.add('clone');
	return clone;
}

function updateCarousel() {
	carouselBox.style.transform = `translateX(-${currentIndex * 100 / productDisplay}%)`;
	// carouselBox.style.transform = `translateX(-${currentIndex * 100 / 1}%)`;
}

moveLeft.addEventListener('click', () => {
	if (--currentIndex < 0) {
		currentIndex = gallery.length - productDisplay * 2 - 1;
		carouselBox.style.transition = 'none';
		updateCarousel();

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				carouselBox.style.transition = '';
			});
		});
	}
	updateCarousel();
})

moveRight.addEventListener('click', () => {
	carouselBox.style.transition = '';
	if (++currentIndex >= gallery.length - productDisplay) {
		currentIndex = productDisplay;
		carouselBox.style.transition = 'none';
		updateCarousel();

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				carouselBox.style.transition = '';
			});
		});
	}
	updateCarousel();
})

window.addEventListener('resize', () => {
	productDisplay = getProductDisplay();
	createCarousel();
});