const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message one",
  "Message two",
  "Message three",
  "Message four",
  "Message five",
  "Message six",
];
const types = ["error", "info", "success"];

button.addEventListener("click", () => createNotification());

function createNotification(message = "", type) {
  /* NOTE:
   * Using random messages and types in this case is only for demonstration
   * purposes. Don't use random content in production.
   */
  const n = document.createElement("div");
  n.classList.add("toast");
  n.classList.add(type || getRandomEl(types));
  n.innerText = message || getRandomEl(messages);
  toasts.appendChild(n);

  setTimeout(() => {
    n.remove();
  }, 3000);
}

function getRandomEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
