let userScore = 0
let compScore = 0


//Computer Choice
function getCompChoice(){
const choice = ['rock','paper','scissors'];
const compChoice = Math.floor(Math.random()* 3
);
return choice[compChoice];
}
console.log (getCompChoice());

// function userChoice(){
    // prompt 'type rock, paper or scissors.'
// }

function playRound(userChoice,compChoice){
    if (userChoice === 'rock' && compChoice === 'rock') {
        return 'You tied! You both picked rock...';
    }
    else if (userChoice === 'scissors' && compChoice === 'scissors') {
        return 'You tied! You both picked scissors...'
    }
    else if (userChoice === 'paper' && compChoice === 'paper'){
        return 'You tied! You both picked paper...'
    }
    else if (userChoice === 'rock' && compChoice ==='scissors'){
        userScore += 1;
        return 'You win! Rock crushes scissors!'
        }
    else if (userChoice === 'rock' && compChoice ==='paper'){
        compScore += 1;
        return 'You lose! Paper covers rock!'  
    }
    else if (userChoice === 'paper' && compChoice === 'scissors'){
        compScore += 1; 
        return 'You lose! Scissors cut Paper!'
        
    }
    else if (userChoice === 'paper' && compChoice === 'rock'){
        userScore += 1;
        return 'You win! Paper covers rock!'
    }
        
    else if (userChoice ==='scissors' && compChoice === 'paper'){
        userScore += 1;
        return 'You win! Scissors cuts paper!'
        
    }
    else if (userChoice ==='scissors' && compChoice === 'rock'){
        userScore += 1;
        return 'You lose! Rock crushes Scissors!' 
    }

}
let userChoice = prompt ("Rock, paper or scissors?")
const compChoice = getCompChoice()

function game() {
    for (let i = 0; i < 5; i++) {
    const compChoice = getCompChoice()
    let userChoice = prompt ("Let's Play", "Rock, paper or scissors?").toLowerCase()
    console.log (playRound(userChoice,compChoice))
    console.log('You: ' + userScore)
    console.log ('Computer: ' + compScore)
 }
 if (userScore > compScore){
    console.log( "You beat the computer! You're a legend!")
    }
    else if (userScore < compScore){
        console.log ("You lost to a computer 😂")
    }
    else {
        console.log ("You tied with the computer, not bad.")
    }
}


    


game ()


