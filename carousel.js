// JavaScript for Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Show the current image
function showCurrentImage() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
}

// Go to the previous image
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  showCurrentImage();
});

// Go to the next image
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  showCurrentImage();
});

// Initialize the carousel by showing the first image
showCurrentImage();
