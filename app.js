let colorArrey = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'violet', 'indigo'];
let container = document.querySelector('section');
let h1w = document.querySelector('h1');
let colorSelected = document.querySelector('#selectedColors');
for (let color of colorArrey) {
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor = color;
    box.addEventListener('click', function () {
        h1w.innerText = 'You Have Selcted';
        colorSelected.innerText = box.style.backgroundColor;
        colorSelected.style.backgroundColor = box.style.backgroundColor;
    })
}