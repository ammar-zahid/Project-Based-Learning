var img = document.querySelector('.timeline-profile-uploads img');
var loveOnImg = document.querySelector('.love');
var loveOnBtn = document.querySelector('.loveBtn');

img.addEventListener('dblclick', function(){
        loveOnImg.style.opacity = 1;
        loveOnBtn.style.color = 'red'
        loveOnBtn.classList.remove("ri-heart-3-line");
        loveOnBtn.classList.add("ri-heart-3-fill");
    setTimeout(function(){
        loveOnImg.style.opacity = 0;
    }, 1500)
})

loveOnBtn.addEventListener('click', function(){
    loveOnBtn.classList.toggle("ri-heart-3-line"); // Toggle the class
    loveOnBtn.classList.toggle("ri-heart-3-fill");
    loveOnBtn.style.color = 'red'
})