const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxesInView);

showBoxesInView();

function showBoxesInView() {
  // NOTE: this gives better results than just only window.innerHeight
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
