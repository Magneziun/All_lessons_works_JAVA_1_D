const slides = document.querySelectorAll('.tab_item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function setActiveSlide(index) {

  slides.forEach(item => item.classList.remove('active'));

  slides[index].classList.add('active');
}

function goToSlide(index) {
  if (index < 0) index = 0;
  if (index >= slides.length) index = slides.length - 1;
  if (index === currentIndex) return;
  currentIndex = index;
  setActiveSlide(currentIndex);
}

// Обработчики кнопок
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

setActiveSlide(0);
