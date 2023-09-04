var tl = gsap.timeline();

tl.from('#nav', {
    opacity: 0,
    duration: 1
});

tl.from('#navLogo, #navElements, #navButtons', {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: 0.3
});

tl.from('#left h1', {
   x: -100,
   opacity: 0, 
   duration: 1,
   stagger: 0.5
});

tl.from('#right img', {
   opacity: 0,
   scale: 2, 
   duration: 1.5
});

gsap.from("#boxes .box", {
    opacity: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
        trigger: "#boxes .box",
        scroller: "body",
        markers: true
    }
})