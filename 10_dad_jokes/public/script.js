const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const { joke } = await res.json();

  jokeEl.innerText = joke;
}

jokeBtn.addEventListener("click", generateJoke);
