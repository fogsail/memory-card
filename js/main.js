const cardsArr = [
    {'name':'america', 'img':'images/avengers/captain-america.jpg' },
    {'name':'ironman', 'img':'images/avengers/iron-man.jpg' },
    {'name':'thor', 'img':'images/avengers/thor.jpg' },
    {'name':'blackpanther', 'img':'images/avengers/blackpanther.jpg' },
    {'name':'drstrenge', 'img':'images/avengers/drstrenge.jpg' },
    {'name':'hulk', 'img':'images/avengers/hulk.jpg' },
    {'name':'ironmachine', 'img':'images/avengers/ironmachine.jpg' },
    {'name':'rocket', 'img':'images/avengers/rocket.jpg' }
];

// icon:
let closeIcon = document.querySelector(".close");

// moveCounter:
let moves = 0;
let movesCounter = document.querySelector(".moves");

// timer:
let second = 0, minute = 0, hour = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute+" 分 "+second+" 秒";
        second++;
        if(second === 60) {
            minute++;
            second = 0;
        }
        if(minute === 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}


// create Avengers' cards
const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

// concat the cards
let gameGrid = cardsArr.concat(cardsArr);

function startGame(){
    gameGrid.sort(() => 0.5 - Math.random());

    gameGrid.forEach(function(elem) {
        const cards = document.createElement("div");
        // this card is used to set All avengers cards

        cards.classList.add("card");
        cards.dataset.name = elem.name;
        // add data-name to the cards

        const front = document.createElement("div");
        front.classList.add("front");
        // get front of cards

        const back = document.createElement("div");
        back.classList.add("back");
        // get back of the cards

        back.style.backgroundImage = `url(${elem.img})`;
        // back has the same image

        grid.appendChild(cards);
        cards.appendChild(front);
        cards.appendChild(back);

        var timer = document.querySelector(".timer");
        timer.innerHTML = "0 分 0 秒";
        clearInterval(interval);
    });
};
startGame();
/*start game finished!*/


let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1200;
let matchedCard = document.getElementsByClassName("match");
let modal = document.getElementById("popup1");
console.log(modal);


// check congratulations
// first initial style:
document.querySelector(".content-1").style.color = "#fff";
document.querySelector(".content-1").style.fontFamily = "'GALACTIC VANGUARDIAN NCV'";
document.querySelector(".content-2").style.color = "#fff";
document.querySelector(".content-2").style.fontFamily = "'GALACTIC VANGUARDIAN NCV'";


const congratulations = function() {
    if(matchedCard.length === 16) {
        clearInterval(interval);
        finalTime = timer.innerHTML;
        modal.classList.add("show");

        document.getElementById("finalMove").innerHTML = moves/2;
        document.getElementById("totalTime").innerHTML = finalTime;

        closeWindow();
    }
}

// changed status when matched!
const match = function() {
    const selected = document.querySelectorAll(".selected");
    selected.forEach(function(card) {
        card.classList.add("match");   
    });

    console.log(matchedCard.length);  
    
    congratulations();
    
}

const resetGuesses = function() {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(function(card) {
        card.classList.remove("selected");
    });
};

//add class after click
grid.addEventListener("click", function(event) {
    const clicked = event.target;
    if(clicked.nodeName === "SECTION" || clicked === previousTarget
        || clicked.parentNode.classList.contains("selected")
        || clicked.parentNode.classList.contains("match")) {
        return;
    }
    // if we clicked the clicked card, return
    
    moves++;
    if(moves === 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
    if(moves % 2 === 0) movesCounter.innerHTML = moves/2;
    console.log("we moves" + moves);
    // moves/2 is the data we need!

    if(count < 2) {
        count++;
        // 1 is for the firstGuess
        // 2 is for the secondGuess

        if(count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add("selected");
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add("selected");
        }

        if(firstGuess && secondGuess) {
            if(firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
});


function cleanGrid() {
    while(grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
    console.log("Grid has been clear!");
    moves = 0;
    timer.innerHTML = "0 分 0 秒";
    movesCounter.innerHTML = moves/2;
}

// use close icon to close the win-window
// use $('.grid').empty() to clean
function closeWindow() {
    closeIcon.addEventListener("click", function(evt) {
        cleanGrid();
        modal.classList.remove("show");
        console.log("removing X");

        startGame();
    });
}

function playAgain() {
    cleanGrid();
    modal.classList.remove("show");
    console.log("removing through botton");

    startGame();
}

