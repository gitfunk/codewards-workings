// 8 kyu
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
};

// scissors > paper > rock > scissors

// hot damn this seems complex. A bunch of IF statements for all the matching pairs? Seems like a lot of lines of code. 

// Found a loooong article talking about different ways of coding rock paper scissors in javascript. Pretty daunting. 
// https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535


const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };