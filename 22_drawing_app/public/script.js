const canvas /*: HTMLCanvasElement */ = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");

let size = 20;
let color = "#ff0000";
let [x, y] = [0, 0];
let isPressed = false;

colorEl.value = color;

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener("click", () => {
  size -= 1;
  if (size < 1) {
    size = 1;
  }

  sizeEl.innerText = size;
});

increase.addEventListener("click", () => {
  size += 1;
  if (size > 50) {
    size = 50;
  }
  sizeEl.innerText = size;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = 0;
  y = 0;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2); // NOTE: to avoid empty spaces when moving the mouse fast
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
