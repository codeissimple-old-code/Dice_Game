/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;
//Initilise the game
init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  //1. Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";
  if (dice !== 1) {
    //Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //add current score to global score
  scores[activePlayer] += roundScore;
  // Update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  //check if the player won the game
  if (scores[activePlayer] >= 1) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!!!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    nextPlayer();
  }
  nextPlayer();
});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

}



function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector(".dice").style.display = "none";
}



/*
 = dice;
document.querySelector("#current-" + activePlayer).innerHTML =
  "<em>" + dice + "</em>";
var x = document.querySelector("#score-0").textContent;
console.log(x); */
