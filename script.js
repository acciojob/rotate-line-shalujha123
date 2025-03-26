let angle = 0;
const line = document.getElementById('line');

setInterval(() => {
    angle += 2;  // Increment rotation angle
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);