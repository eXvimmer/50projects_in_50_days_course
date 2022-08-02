const smallCups = document.querySelectorAll(".cup-small");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCup(idx));
});

function highlightCup(idx) {
  smallCups.forEach((c, i) => {
    if (
      smallCups[idx].classList.contains("full") &&
      !smallCups[idx].nextElementSibling.classList.contains("full")
    ) {
      idx--;
    }

    if (i <= idx) {
      c.classList.add("full");
    } else {
      c.classList.remove("full");
    }
  });
}
