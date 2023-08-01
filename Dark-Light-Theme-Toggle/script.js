const toggleButton = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggleButton.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
    }
    body.style.transition = '1s';
});