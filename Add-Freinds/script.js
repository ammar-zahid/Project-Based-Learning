const istatus = document.querySelector('.status');

const addBtn = document.querySelector('.add');

let check = 0;

addBtn.addEventListener('click', ()=> {
 if (check == 0) {
    addBtn.textContent = 'Added';
    addBtn.style.backgroundColor = 'green'
    addBtn.style.color = 'white'
    istatus.textContent = 'Freinds';
    istatus.style.color = 'green'
    istatus.style.fontSize = '1.5rem'
    check = 1;
 } else {
    addBtn.textContent = 'Removed';
    addBtn.style.backgroundColor = 'red'
    istatus.textContent = 'Anonymous';
    istatus.style.color = 'red'
    istatus.style.fontSize = '1.5rem'
    check = 0
 }
})