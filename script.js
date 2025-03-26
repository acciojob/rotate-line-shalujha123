document.addEventListener("DOMContentLoaded", () => {
    let line = document.getElementById("line");

    // Ensure styles are applied correctly
    line.style.position = "absolute";
    line.style.width = "200px";
    line.style.height = "2px";
    line.style.backgroundColor = "black";
    line.style.top = "50%";
    line.style.left = "50%";
    line.style.transform = "translate(-50%, -50%)";

    let angle = 0;
    setInterval(() => {
        angle += 2;
        line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }, 20);
});