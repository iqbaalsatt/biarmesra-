gsap.registerPlugin(ScrollTrigger);

// 1. Animasi Gorden Terbuka saat Scroll
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "60% top",
        scrub: 1.5,
        pin: ".curtain-container"
    }
});

tl.to(".left-side", { xPercent: -105, duration: 2 })
  .to(".right-side", { xPercent: 105, duration: 2 }, "<")
  .to(".welcome-msg", { opacity: 0, scale: 0.8, duration: 1 }, "<");

// 2. Animasi Munculnya Bingkai
gsap.utils.toArray(".art-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        opacity: 0,
        y: 100,
        duration: 1.2
    });
});

// 3. Fungsi Pop-up Zoom
function openLightbox(element) {
    const imgSrc = element.querySelector('img').src;
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}
