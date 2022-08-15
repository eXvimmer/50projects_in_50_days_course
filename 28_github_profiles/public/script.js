const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const API_URL = `https://api.github.com/users/`;

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}

function createUserCard({
  avatar_url,
  name,
  login,
  bio,
  followers,
  following,
  public_repos,
}) {
  const cardEl = `
    <div class="card">
      <div>
        <img
          src="${avatar_url}"
          alt="${name}'s Avatar"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${name}</h2>
        <h4>${login}</h4>
        <p>${bio}</p>

        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
    
  `;
  main.innerHTML = cardEl;
}

function createErrorCard(msg) {
  const cardEl = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardEl;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = search.value;

  if (name) {
    getUser(name);
    search.value = "";
  }
});
