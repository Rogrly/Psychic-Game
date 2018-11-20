//Psuedo Code: The Psychic Game
// 1. Variables to set: letters in array list, computer function, player function/event, score counter (wins/losses/guesses left/guesses display)
// 2. Computer (Psychic) randomly picks a letter a-z
// 3. Player guesses a letter a-z by pressing the key
// 4. Player gets 10 letter guesses per game 
// 5. Every incorrect letter guesses counter counts down from 10-0 
// 6. When guesses counter hits 0 - add a value to losses - restart game
// 7. If player keys correct letter - add point value to wins and restart game

//Array list for letter strings
var letters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

//Setting variables for game functions: computer & value counters
var psychic; //the computer
var winning = 0; //wins counter
var fails = 0; //losses counter 
var guessCount = 10; //variable with value of 10 (limit of letter attempts)
var keyGuess = []; //letters player key presses

//Variable function for computer (psychic)
var psychic = letters[Math.floor(Math.random() * letters.length)]; //computer picks a randomized value from array list (letters)
console.log("Answer", psychic); //log computer letter choice into console (show answer in console)

//Player function events
document.onkeypress = function(event) { //when player press a key execute function
var player = event.key; //identify letter key pressed by player
keyGuess.push(player); //add the letter key pressed into (guesses) array

//Setting statement for player
if (player === psychic) { // (if) player letter value equals === computer letter value
    win(); //execute win function
    alert ("You're Psychic, killing it!"); //trigger alert pop up 

} else {
    guessCount--; // (else) execute (guessCount) variable
}

if (guessCount == 0) { // (if) (guessCount) variable has no value
    loss(); //execute (loss) function
    }

//Function for player wins
function win() {
	winning++; //when win function is triggered add +1 value to (wins) variable
	reset(); //execute reset function (reset game)
}

//Function set for player loss
function loss() {
    fails++; //when loss function is triggered add +1 value to (losses) variable
    reset(); //execute reset function (reset game)
    alert("You Failed, Try Again"); //execute alert pop up
}

//Function for game reset
function reset() {
	psychic = letters[Math.floor(Math.random() * letters.length)]; //computer picks randomized letter from array (letters)
	guessCount = 10; //reset guessesleft counter back to 10
    keyGuess =[]; //reset all player key pressed
    console.log("Answer", psychic); //log computer letter in console
}

//Referencing each <span> element ID within HTML with variables 
document.getElementById('winning').innerHTML = winning;
document.getElementById('fail').innerHTML = fails;
document.getElementById('countdown').innerHTML = guessCount;
document.getElementById('keypress').innerHTML = keyGuess;
}