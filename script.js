// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi Gorden Terbuka
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom center",
        scrub: 1.5, // Membuat animasi mengikuti kecepatan scroll
        pin: true   // Menahan layar sampai gorden terbuka penuh
    }
});

tl.to(".left-curtain", { xPercent: -100, duration: 2 })
  .to(".right-curtain", { xPercent: 100, duration: 2 }, "<") // "<" artinya jalan barengan
  .to(".entrance-text", { opacity: 0, scale: 0.5, duration: 1 }, "<");

// Animasi Munculnya Bingkai (Fade-in saat scroll)
gsap.utils.toArray(".frame-container").forEach((frame) => {
    gsap.from(frame, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
            trigger: frame,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
