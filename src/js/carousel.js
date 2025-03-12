let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const track = document.querySelector('.carousel-slide-track');
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);
