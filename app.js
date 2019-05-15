let compChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
};

const choices = document.querySelector("#choices");

choices.addEventListener(
  "click",
  function(el) {
    let score = el.target.id + compChoice();
    setScore(score);
  },
  false
);

let userScore = 0;
let compScore = 0;

let setScore = score => {
  switch (score) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log(score);
      userScore += 1;
      document.querySelector("#user-score").innerHTML = userScore;
      console.log(userScore);
      console.log("user +");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log(score);
      compScore += 1;
      document.querySelector("#comp-score").innerHTML = compScore;
      console.log(compScore);
      console.log("comp +");
      break;
    default:
      console.log(score);
      console.log("remis");
      break;
  }
};
