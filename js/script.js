// JavaScript code for image slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    setInterval(() => {
        currentIndex++;
        if (currentIndex === totalSlides) {
            currentIndex = 0;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000); // Change image every 4 seconds
});
