const countEl = document.querySelector("#count");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const restart = document.querySelector("#Restart");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  countEl.innerHTML = count;
});

decrement.addEventListener("click", () => {
  count--;
  if (count < 0) count = 0;
  countEl.innerHTML = count;
});

restart.addEventListener("click", () => {
  count = 0;
  countEl.innerHTML = 0;
});
