// declaring an array with all possible values
const choiceValue = ["Rock", "Paper", "Scissors"];

// declaring the play of computer
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choiceValue[randomNumber];
    // console.log(computerChoice);
}

// declaraing the play of user
function userPlay(){
  let userChoice = prompt("Enter a value for the play u hava to choose 'Rock - Paper - Scissors' or else u go with 'Rock' xD", "Rock");
  if (userChoice.toLowerCase() === "Rock".toLowerCase()){
    return "Rock";
  }
  else if(userChoice.toLowerCase() === "Paper".toLowerCase()){
    return "Paper";
  }
  else if(userChoice.toLowerCase() === "Scissors".toLowerCase()){
    return "Scissors";
  }
  else{
    return "Rock";
  }
}
// declaration of the round
function playRound(playerSelection, computerSelection ){
  // the outcome will hold the result of the play
  let outcome;

  // printing both of the choices
  console.log(`u choose ${playerSelection} --- pc choose ${computerSelection}`);

  // computing the outcome
  if (computerSelection === playerSelection) {
    outcome = "tie";
  }
  else if(computerSelection == "Rock" && playerSelection == "Paper"){
    outcome = "humanWins";
  }
  else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    outcome = "pcWins";
  }
  else if(computerSelection == "Paper" && playerSelection == "Rock"){
    outcome = "pcWins";
  }
  else if(computerSelection == "Paper" && playerSelection == "Scissors"){
    outcome = "humanWins";
  }
  else if(computerSelection == "Scissors" && playerSelection == "Rock"){
    outcome = "humanWins";
  }
  else if(computerSelection =="Scissors" && playerSelection == "Paper"){
    outcome = "pcWins";
  }
  else{
    outcome = "Something went wrong";
  }
  return outcome;
}
// declaration of the game 
function game(){
  // Declaring and initializing the value of winner counter to deterine who is the winner
  let pcIsWinner = 0;
  let userIsWinner = 0;

  // the loop will go as as far as we want, this indicates the round that we will play
  let howManyRounds = Number(prompt("How Many Round You Want to play"));
  for(let i=0; i<howManyRounds; i++){
    // initializing the choices from each player
    let pc = computerPlay();
    let human = userPlay();
    let winnerOfRound = playRound(human,pc);
    if(winnerOfRound === "pcWins"){
      pcIsWinner++;
    }
    else if(winnerOfRound === "humanWins"){
      userIsWinner++;
    }
    else{
      console.log("Wow We have a tie here go again boys!");
    }
    }
    //and the winnier is
    if(pcIsWinner > userIsWinner){
      console.log("PC master is the winner! yo");
    }
    else if(pcIsWinner < userIsWinner){
      console.log("Hmmmm You cant compare with the beast! human is the winner!");
    }
    else{
      console.log("Good job everyone we have a tie here!");
  }
}
//playing the game
game();