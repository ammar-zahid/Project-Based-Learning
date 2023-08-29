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

var stories = [
    {imgSrc: 'images/story1.jpg'},
    {imgSrc: 'https://plus.unsplash.com/premium_photo-1692574097436-21d69a969cc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'},
    {imgSrc: 'https://images.unsplash.com/photo-1692893906137-9a93c125825c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'},
    {imgSrc: 'https://images.unsplash.com/photo-1687360441387-0179af118555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80'},
    {imgSrc: 'https://images.unsplash.com/photo-1692862419231-04470103dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80'}
]

var storyContainer = document.querySelector('.stories-section');

stories.forEach(function(img) {
    var divElement = document.createElement('div');
    divElement.classList.add('story');

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', img.imgSrc); // Replace 'img.imgSrc' with the actual image source

    imgElement.addEventListener('click', function() {
        var displayStory = document.querySelector('.modal');
        displayStory.style.backgroundImage = `url(${img.imgSrc})`;
        displayStory.style.zIndex = 2;
        setTimeout(() => {
            displayStory.style.zIndex = -2;
        }, 3000);
    });

    divElement.appendChild(imgElement);
    storyContainer.appendChild(divElement);
});