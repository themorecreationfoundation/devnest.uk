// JavaScript code for image slider (if you prefer a manual slider)
let sliderIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    sliderIndex++;
    if (sliderIndex > slides.length) { sliderIndex = 1; }
    slides[sliderIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
