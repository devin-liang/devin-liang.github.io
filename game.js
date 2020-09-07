let rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    reset = document.getElementById('reset-btn'),
    text = document.getElementById('computer-text');

let buttons = document.getElementsByClassName('input');
console.log(buttons);
let selected;

rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);
reset.addEventListener('click', resetGame);


function selectRock(e){
    e.preventDefault;
    rock.classList.add('selected');
    selected = 'rock';
    paper.classList.add('hide');
    scissors.classList.add('hide');

    displayText('You chose rock!');
    compareChoice('rock');
}

function selectPaper(e){
    e.preventDefault;
    paper.classList.add('selected');
    selected = 'paper';
    rock.classList.add('hide');
    scissors.classList.add('hide');

    displayText("You chose paper!");
    compareChoice("paper");
}

function selectScissors(e){
    e.preventDefault;
    scissors.classList.add('selected');
    selected = 'scissors';
    paper.classList.add('hide');
    rock.classList.add('hide');

    displayText("You chose scissors!");
    compareChoice('scissors');
}

function resetGame(e){
    e.preventDefault;
    for(let i = 0; i < buttons.length; ++i){
        buttons[i].classList.remove('hide');
        buttons[i].classList.remove('selected');
    }
    text.innerHTML = "";
}

function randomNum(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// Return rock, paper, or scissors at random and
// compare it to the players choice passed in
function compareChoice(player_choice){
    let choice = randomNum(3);
    console.log(choice);
    switch(choice){
        // computer chooses rock
        case 0:
            setTimeout(() => displayText('Computer chooses rock!'), 1500);
            switch(player_choice){
                case 'rock':
                    setTimeout(() => displayText('It\'s a tie!'), 3000);
                    break;
                
                case 'paper':
                    setTimeout(() => displayText('You win!'), 3000);
                    break;

                case 'scissors':
                    setTimeout(() => displayText('You lose!'), 3000);
                    break;
            }
            break;
            
        // computer chooses paper
        case 1:
            setTimeout(() => displayText('Computer chooses paper!'), 1500);
            switch(player_choice){
                case 'rock':
                    setTimeout(() => displayText('You lose!'), 3000);
                    break;
                
                case 'paper':
                    setTimeout(() => displayText('It\'s a tie!'), 3000);
                    break;

                case 'scissors':
                    setTimeout(() => displayText('You win!'), 3000);
                    break;
            }
            break;

        // computer chooses scissors
        case 2:
            setTimeout(() => displayText('Computer chooses scissors!'), 1500);
            switch(player_choice){
                case 'rock':
                    setTimeout(() => displayText('You win!'), 3000);
                    break;
                
                case 'paper':
                    setTimeout(() => displayText('You lose!'), 3000);
                    break;

                case 'scissors':
                    setTimeout(() => displayText('It\'s a tie!'), 3000);
                    break;
            }
            break;
    }
}

function displayText(message){
    text.innerHTML = message;
}


