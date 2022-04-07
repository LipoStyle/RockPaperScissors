// declaring an array with all possible values for the cumputer play
const computerAnswerList = ["Rock", "Paper", "Scissors"];
// selecting all tags
const buttons = document.querySelectorAll("button");
const userPlays = document.querySelector(".user-play");
const pcPlays = document.querySelector(".computer-play");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");
// global variable for player choice
let userPlay = " ";
let pcPlay = " ";
//winning condition for each team
let uwinCondition = 0;
let cwinCondition = 0;
// adding event listener on buttons
buttons.forEach(node => node.addEventListener("click",playRound));
// declaring the fancion for the play of the round
function playRound(e){   
  //declaring user play
  userPlay = e.target.innerText;
  //declaring computer play
  pcPlay = computerPlay();
  let winCondition = winnerOfRound(userPlay, pcPlay);
  // showing player choice and pc choice to scoreboard
  if(winCondition == "human"){
    uwinCondition++;
    userPlays.innerText = "You choose: " + userPlay;
    score.innerText = `${uwinCondition} : ${cwinCondition}`;
    pcPlays.innerText = "Your PC choose: " + pcPlay;
    winner.innerText = "Wow! Human wins the round GRATS!";
  }else if(winCondition == "computer"){
    cwinCondition++;
    userPlays.innerText = "You choose: " + userPlay;
    score.innerText = `${uwinCondition} : ${cwinCondition}`;
    pcPlays.innerText = "Your PC choose: " + pcPlay;
    winner.innerText = "Wow! Computer wins the round GRATS!";
  }else {
    userPlays.innerText = "You choose: " + userPlay;
    score.innerText = `${uwinCondition} : ${cwinCondition}`;
    pcPlays.innerText = "Your PC choose: " + pcPlay;
    winner.innerText = "Wow! We have Tie here lets do it !";
  }
  if((uwinCondition == 5) || (cwinCondition ==5)){
    if(uwinCondition == 5){
      winner.innerText = "WOWOWOWOWOWOW HUMAN WINS THE GAME!!";
    }
    if(cwinCondition == 5){
      winner.innerText = "WOWOWOWOWOWOW COMPUTER WINS THE GAME!!";
    }
    buttons.forEach(node =>node.removeEventListener("click", playRound));
  }
}
// declaring the function for computer play
function computerPlay(){
  let i = Math.floor(Math.random(10)*3);
  return computerAnswerList[i];
}
// declaring the function who will find the winner of the round
function winnerOfRound(human,computer){
  let winnerIs = " ";
  if(human.toLowerCase() === computer.toLowerCase()){
    winnerIs = "tie";
  } else if(human.toLowerCase() === "rock" && computer.toLowerCase() === "paper"){
    winnerIs = "computer";
  }else if(human.toLowerCase() === "rock" && computer.toLowerCase() === "scissors"){
    winnerIs = "human";
  } else if(human.toLowerCase() === "paper" && computer.toLowerCase() === "rock"){
    winnerIs = "human";
  }else if(human.toLowerCase() === "paper" && computer.toLowerCase() === "scissors"){
    winnerIs = "computer";
  } else if(human.toLowerCase() === "scissors" && computer.toLowerCase() === "rock"){
    winnerIs = "computer";
  } else if(human.toLowerCase() === "scissors" && computer.toLowerCase() === "paper"){
    winnerIs = "human";
  } else{
    winnerIs = "something went wrong";
  }
  return winnerIs;
}