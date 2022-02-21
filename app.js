gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".hero", {
    x: "-100%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
});


const screenWidth = document.querySelector(".space-container").offsetWidth;

gsap.to(".space-ship", {
    scrollTrigger: {
        trigger: ".space-ship",
        start: "top center",
        end: "+=100px", //"bottom 100px",
        //markers: true,
        scrub: 1,
        toggleActions: "restart pause reverse pause"
    },
    x: 2000,
    //rotation: 360,
    duration: 3
});