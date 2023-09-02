gsap.from("#logo, #navLinks, #buttons", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.3
})

gsap.from('h1', {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2
})

gsap.from('#heroImages img', {
    opacity: 0,
    duration: 2,
    x: 100,
    delay: 1 
})

gsap.to("#scrollDown h3", {
    y: 20,
    repeat: -1,
    yoyo: true,
})