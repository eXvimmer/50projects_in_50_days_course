const loveMe = document.querySelector(".love-me");
const times = document.querySelector("#times");
const plural = document.getElementById("plural");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  times.innerText = ++timesClicked;
  plural.innerText = timesClicked === 1 ? "" : "s";
  createHeart(e);
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.className = "fas fa-heart";

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = yInside + "px";
  heart.style.left = xInside + "px";

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}
