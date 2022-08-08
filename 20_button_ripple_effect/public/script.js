const btns = document.querySelectorAll(".ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    // const rect = e.target.getBoundingClientRect();
    const buttonTop = e.target.offsetTop; // rect.y
    const buttonLeft = e.target.offsetLeft; // rect.x
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
