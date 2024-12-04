// JavaScript code for the image slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pausePlayBtn = document.getElementById('pause-play-btn');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let isPlaying = true;
    let sliderInterval;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    function startSlider() {
        sliderInterval = setInterval(showNextSlide, 4000); // Change slide every 4 seconds
        pausePlayBtn.textContent = '⏸️'; // Pause symbol
        pausePlayBtn.setAttribute('aria-label', 'Pause Slider');
        isPlaying = true;
    }

    function stopSlider() {
        clearInterval(sliderInterval);
        pausePlayBtn.textContent = '▶️'; // Play symbol
        pausePlayBtn.setAttribute('aria-label', 'Play Slider');
        isPlaying = false;
    }

    function resetSliderInterval() {
        clearInterval(sliderInterval);
        if (isPlaying) {
            startSlider();
        }
    }

    // Event Listeners for Control Buttons
    nextBtn.addEventListener('click', () => {
        showNextSlide();
        resetSliderInterval();
    });

    prevBtn.addEventListener('click', () => {
        showPrevSlide();
        resetSliderInterval();
    });

    pausePlayBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopSlider();
        } else {
            startSlider();
        }
    });

    // Initialize Slider
    showSlide(currentIndex);
    startSlider();
});
