document.addEventListener('DOMContentLoaded', function() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (!testimonialTrack) return;
    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        const translateX = -currentIndex * 100;
        testimonialTrack.style.transform = `translateX(${translateX}%)`;
    }, 4000);
});
