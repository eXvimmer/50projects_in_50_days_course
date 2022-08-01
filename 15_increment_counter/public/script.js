const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // TODO: first set data-target by fetching it from API
    const target = +counter.getAttribute("data-target");
    // const target = +counter.dataset.target;
    const c = +counter.innerText;
    const increment = target / 200; // 200 for speed, you can change it.

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
