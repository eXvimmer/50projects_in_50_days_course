const url = `https://source.unsplash.com/random/`;
const container = document.querySelector(".container");
const rows = 5;

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${url}${getRandomSize()}`;
  container.appendChild(img);
}
