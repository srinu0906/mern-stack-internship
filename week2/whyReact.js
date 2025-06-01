let count = 0;
const button = document.getElementById('counter-btn');
const display = document.getElementById('count-display');

button.addEventListener('click',()=>{
    count++;
    display.textContent = "Count : "+count;
})