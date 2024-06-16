window.addEventListener('scroll', function() {
    let parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(function(section) {
        let speed = section.dataset.speed;
        let yPos = window.scrollY * speed;
        section.style.backgroundPositionY = -yPos + 'px';
    });
})