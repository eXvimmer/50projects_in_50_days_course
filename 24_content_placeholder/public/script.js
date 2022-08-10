const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const nameEl = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = `
    <img
      src="https://source.unsplash.com/random/?laptop,coding"
      class="card__img"
      alt="a random picture of laptop"
    />
  `;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ut!`;
  profileImg.innerHTML = `
    <img
      src="https://randomuser.me/portraits/women/71.jpg"
      alt="a random woman"
    />
  `;
  nameEl.innerHTML = "Jane Doe";
  date.innerHTML = new Date().toDateString();

  animatedBgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animatedBgTexts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
