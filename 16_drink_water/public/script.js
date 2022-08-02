const smallCups = document.querySelectorAll(".cup-small");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCup(idx));
});

function highlightCup(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((c, i) => {
    if (i <= idx) {
      c.classList.add("full");
    } else {
      c.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (!fullCups) {
    percentage.style.visibility = "hidden";
    percentage.style.hight = 0;
  } else {
    percentage.style.visibility = "visible";
    // NOTE: 330 is the height of cup
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    // NOTE: 250 for ml and 1000 for liters
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
