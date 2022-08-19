const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  })
);

function doTheTrick(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === target) {
      fast.checked = false;
    }

    if (fast === target) {
      cheap.checked = false;
    }

    if (cheap === target) {
      good.checked = false;
    }
  }
}
