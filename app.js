let userScore = 0;
let compScore = 0;

let compChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

document.querySelector("#choices").addEventListener(
  "click",
  function(el) {
    let comp = compChoice();
    setScore(el.target.id, comp);
    setTimeout(() => {
      document.querySelector(
        "#result"
      ).innerHTML = `Make you move. Choice one:`;
    }, 3000);
  },
  false
);

let setScore = (user, comp) => {
  switch (user + comp) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userScore += 1;
      document.querySelector("#user-score").innerHTML = userScore;
      document.querySelector(
        "#result"
      ).innerHTML = `Your choices ${user}, computer choices ${comp}. You win!`;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      compScore += 1;
      document.querySelector("#comp-score").innerHTML = compScore;
      document.querySelector(
        "#result"
      ).innerHTML = `Your choices ${user}, computer choices ${comp}. You lose!`;
      break;
    default:
      document.querySelector(
        "#result"
      ).innerHTML = `Your choices ${user}, computer choices ${comp}.`;
      break;
  }
};
