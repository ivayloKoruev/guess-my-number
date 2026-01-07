'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Let the guessing game begin...';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.between').textContent = '(Between 1 and 30)';

// //working with input fields 
// document.querySelector('.guess').value = 23;

// document.querySelector('.check').addEventListener('click', () => {
//     document.querySelector('.number').textContent = document.querySelector('.guess').value;
// });

let number = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

//refactoring code to make it more appealing, readable and cleaner
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    
    //when player wins
    if(!guess){
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');
    }else if(guess === number){
        // document.querySelector('.message').textContent = '😎 Correct answer!';
        displayMessage('😎 Correct answer!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = number;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    }else if(guess !== number){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > number ? '☝️ Too high!' : '👇 Too low!';
            displayMessage(guess > number ? '☝️ Too high!' : '👇 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '👾 You lose!';
            displayMessage('👾 You lose!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#b34747ff';
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {

    number = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = number;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = highScore;
});