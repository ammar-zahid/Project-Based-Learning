const page = document.querySelector("body");
const crsr = document.querySelector(".cursor")

page.addEventListener("mousemove", function(movement){
    crsr.style.left = movement.x+"px";
    crsr.style.top = movement.y+"px";
})