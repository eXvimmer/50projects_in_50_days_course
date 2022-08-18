const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const clipboardEl = document.getElementById("clipboard");
const generateEl = document.getElementById("generate");

const random = {
  lower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  upper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  symbol() {
    const symbols = "!@#$%^&*()-+{}[]/,.=";
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
  number() {
    return Math.floor(Math.random() * 10);
  },
};

clipboardEl.addEventListener("click", async () => {
  const text = resultEl.innerText;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const icon = clipboard.querySelector(".far.fa-clipboard");
    icon.classList.add("success");
    setTimeout(() => {
      icon.classList.remove("success");
    }, 1500);
  } catch (err) {
    console.error("Could not copy text: ", err);
  }
});

generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generateRandomPassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

function generateRandomPassword(
  length,
  hasUpper,
  hasLower,
  hasNumber,
  hasSymbol
) {
  if (length < 4 || (!hasUpper && !hasLower && !hasNumber && !hasSymbol)) {
    return "";
  }

  let result = "";
  const actions = [];
  hasLower && actions.push(random.lower);
  hasSymbol && actions.push(random.symbol);
  hasUpper && actions.push(random.upper);
  hasNumber && actions.push(random.number);

  for (let i = 0; i < length - actions.length; i++) {
    result += actions[Math.floor(Math.random() * actions.length)]();
  }
  // to be sure that we have what we want (i.e. numbers, symbols, ...)
  actions.forEach((act) => (result += act()));

  result = shuffle(result);
  return result;
}

function shuffle(str) {
  let splitted = str.split("");
  let result = "";

  while (splitted.length) {
    result += splitted.splice(Math.random() * splitted.length, 1);
  }

  return result;
}
