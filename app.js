const userScore = 0;
const compScore = 0;

let compChoice = () => {
  const choice = ["rock", "paper", "scessors"];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

const choices = document.querySelector("#choices");

choices.addEventListener(
  "click",
  function(el) {
    console.log(el.target.id);
  },
  false
);

console.log(compChoice());
