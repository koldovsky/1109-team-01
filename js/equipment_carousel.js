const equipmentSlider = [
  '<div><img src="img/archway-cooler.png" alt="Archway Cooler"><p>Archway cooler</p></div>',
  '<div><img src="img/premium-cooler.png" alt="Premium Cooler"><p>Premium cooler</p></div>',
  '<div><img src="img/apex-cooler.png" alt="Apex Cooler"><p>Apex cooler</p></div>'
];

let currentIndex = 0;

function renderSlide() {
  const carouselBox = document.querySelector('.eq__carousel-box');
  carouselBox.innerHTML = equipmentSlider[currentIndex];
  if(window.matchMedia('(min-width: 767px)').matches) {
    const secondSlide = currentIndex + 1 > equipmentSlider.length - 1 ? 0 : currentIndex + 1;
    carouselBox.innerHTML += equipmentSlider[secondSlide];
  }
}


function nextSlide() {
  currentIndex = currentIndex + 1 > equipmentSlider.length - 1 ? 0 : currentIndex + 1;
  renderSlide();
}

function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? equipmentSlider.length - 1 : currentIndex - 1;
  renderSlide();
}

renderSlide();

const buttonNext = document.querySelector('.eq__btn-next')
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.eq__btn-prev')
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide)