const randomNumb = function () {
  return Math.floor(Math.random() * 6) + 1;
};

document.querySelector(".btn").addEventListener("click", function () {
  let randomNumbs = [];
  for (let i = 1; i < 3; i++) {
    randomNumbs.push(randomNumb());
    document
      .querySelector(`.img${i}`)
      .setAttribute("src", `images/dice${randomNumbs[i - 1]}.png`);
  }

  if (randomNumbs[0] === randomNumbs[1])
    document.querySelector("h1").textContent = "Draw!";
  else
    randomNumbs[0] > randomNumbs[1]
      ? (document.querySelector("h1").textContent = "💖 Player 1 Win")
      : (document.querySelector("h1").textContent = "Player 2 Win 💖");
});
