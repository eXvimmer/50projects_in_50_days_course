// ea2f422c42c98b8cb701ec985e0e9db3
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ea2f422c42c98b8cb701ec985e0e9db3&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=ea2f422c42c98b8cb701ec985e0e9db3&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}

// getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
