const slides = [
    '<div class="carouse__item"><img src="img/meijer.jpg"  alt="Meijer Logo"></div>',
    '<div class="carousel__item"><img src="img/safeway.jpg"  alt="Safeway Logo"></div>',
    '<div class="carousel__item"><img src="img/drager.jpg"  alt="Drager Logo"></div>',
    '<div class="carousel__item"><img src="img/bexen.jpg"  alt="Bexen Logo"></div>',
    '<div class="carousel__item"><img src="img/costco.jpg"  alt="Costco Logo"></div>',
    '<div class="carousel__item"><img src="img/cdn.jpg"  alt="CDN Logo"></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.carousel-clients__slide');
    slideContainer.innerHTML = '';

    const numSlidesToShow = window.matchMedia('(min-width: 1200px)').matches ? 5 : 3;

    for (let i = 0; i < numSlidesToShow; i++) {
        const index = (currentSlideIdx + i) % slides.length;
        const item = document.createElement('div');
        item.className = 'carousel__item' + (i === 0 ? ' active' : '');
        item.innerHTML = slides[index];
        slideContainer.appendChild(item);
    }
}

function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    renderSlide();
}

renderSlide();

const buttonNext = document.querySelector('.carousel-clients__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.carousel-clients__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
