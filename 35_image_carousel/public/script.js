const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  ++idx;
  changeImage();
}

function changeImage() {
  const lastIndex = img.length - 1;
  if (idx > lastIndex) {
    idx = 0;
  } else if (idx < 0) {
    idx = lastIndex;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  --idx;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  ++idx;
  changeImage();
  resetInterval();
});
