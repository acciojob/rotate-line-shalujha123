//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

setInterval(() => {
    angle += 2;
    line.style.transform = `rotate(${angle}deg) translate(-50%, -50%)`;
}, 20);