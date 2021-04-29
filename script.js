// Variables
var userScore = 0;
var compScore = 0;
var word = "";
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".score-board");
const battleUser_div = document.getElementById("user");
const battleComp_div = document.getElementById("comp");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

// Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function battle(user, comp) {
  battleUser_div.innerHTML = user;
  battleComp_div.innerHTML = comp;
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = user + " " + word + " " + comp + ". You win!";
  document.getElementById(user + "i").classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(user + "i").classList.remove("green-glow");
  }, 1300);
  document.getElementById("userScore").classList.add("green-text");
  setTimeout(function () {
    document.getElementById("userScore").classList.remove("green-text");
  }, 1300);
  document.getElementById("compScore").classList.add("red-text");
  setTimeout(function () {
    document.getElementById("compScore").classList.remove("red-text");
  }, 1300);
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = user + " " + word + " " + comp + ". You lose!";
  document.getElementById(user + "i").classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user + "i").classList.remove("red-glow");
  }, 1300);
  document.getElementById("userScore").classList.add("red-text");
  setTimeout(function () {
    document.getElementById("userScore").classList.remove("red-text");
  }, 1300);
  document.getElementById("compScore").classList.add("green-text");
  setTimeout(function () {
    document.getElementById("compScore").classList.remove("green-text");
  }, 1300);
}

function draw(user, comp) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "It's a DRAW! " + user + " equals " + comp + ".";
  document.getElementById(user + "i").classList.add("blue-glow");
  setTimeout(function () {
    document.getElementById(user + "i").classList.remove("blue-glow");
  }, 1300);
  document.getElementById("userScore").classList.add("blue-text");
  setTimeout(function () {
    document.getElementById("userScore").classList.remove("blue-text");
  }, 1300);
  document.getElementById("compScore").classList.add("blue-text");
  setTimeout(function () {
    document.getElementById("compScore").classList.remove("blue-text");
  }, 1300);
}

// User choice
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
      word = "smashes";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "paperrock":
      word = "covers";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "scissorspaper":
      word = "cuts";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "rocklizard":
      word = "crushes";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "lizardspock":
      word = "poisons";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "spockscissors":
      word = "smashes";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "scissorslizard":
      word = "decapitates";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "lizardpaper":
      word = "eats";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "paperspock":
      word = "disproves";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "spockrock":
      word = "vaporizes";
      win(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "rockpaper":
      word = "gets covered by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "scissorsrock":
      word = "get smashed by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "paperscissors":
      word = "gets cut by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "lizardrock":
      word = "gets crushed by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "spocklizard":
      word = "gets poisoned by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "scissorsspock":
      word = "get smashed by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "lizardscissors":
      word = "gets decapitated by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "paperlizard":
      word = "gets eaten by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "spockpaper":
      word = "gets disproved by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "rockspock":
      word = "gets vaporized by";
      lose(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "rockrock":
      draw(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "paperpaper":
      draw(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "lizardlizard":
      draw(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
    case "spockspock":
      draw(userChoice, computerChoice);
      battle(userChoice, computerChoice);
      break;
  }
}

function resetScore() {
  window.location.reload();
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
    word = "smashes";
  });
  paper_div.addEventListener("click", function () {
    game("paper");
    word = "covers";
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
    word = "cuts";
  });
  lizard_div.addEventListener("click", function () {
    game("lizard");
    word = "bites";
  });
  spock_div.addEventListener("click", function () {
    game("spock");
    word = "obliterates";
  });
}

main();
