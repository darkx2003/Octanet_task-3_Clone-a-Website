// slide images

const sliderContent = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let counter = 0;
const sliderDots = document.querySelectorAll('.slider-dot');

function nextSlide() {
    if (counter === slides.length - 1) {
        counter = 0;
    } else {
        counter++;
        sliderContent.style.transition = 'transform 0.5s ease-in-out';
    }
    sliderContent.style.transform = `translateX(${-slideWidth * counter}px)`;

    updateSliderDots();
}

function previousSlide() {
    if (counter === 0) {
        counter = slides.length - 1;
        sliderContent.style.transition = 'transform 0.5s ease-in-out';
        sliderContent.style.transform = `translateX(${-slideWidth * counter}px)`;
    } else {
        counter--;
        sliderContent.style.transition = 'transform 0.5s ease-in-out';
        sliderContent.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    updateSliderDots();
}


//adding silver dots

function updateSliderDots() {
    sliderDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === counter);
    });
}

//button for selecting language

function selectLanguage(language) {
    var selectedLanguageBtn = document.getElementById('selectedLanguageBtn');
    selectedLanguageBtn.textContent = language;
}

// For the "Browse" dropdown menu
const browseMenu = document.querySelector('.browse-menu');
const browseMenuWrapper = document.querySelector('.menu-wrapper');

browseMenu.addEventListener('click', () => {
  browseMenuWrapper.classList.toggle('show');
});

// For the "News" dropdown menu
const newsMenu = document.querySelector('.news-menu');
const newsMenuWrapper = document.querySelector('.menu-wrapper');

newsMenu.addEventListener('click', () => {
  newsMenuWrapper.classList.toggle('show');
});
