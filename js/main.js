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
let modal = document.getElementById("win-window");
console.log(modal);

// ADD CLASS WHEN MATCH
const match = () => {
    
    const selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
        card.classList.add("match");   
    }   
);

    console.log(matchedCard.length);  
    
    function congratulations(){
    if (matchedCard.length == 30){
        // show congratulations modal
        modal.classList.add("show");
            };
        };
    congratulations();
    
}

const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
        card.classList.remove("selected");
    });
};
//add class after click
grid.addEventListener("click", event =>{
    const clicked = event.target;
    if (
        clicked.nodeName === "SECTION" || 
        clicked === previousTarget || clicked.parentNode.classList.contains("selected") ||
        clicked.parentNode.classList.contains("match")
    ){
        return;
    };
    
    if (count < 2){
    count++;
    if(count === 1){
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add("selected");
    } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add("selected");
    }
    if (firstGuess && secondGuess ){
        if (firstGuess === secondGuess){
            setTimeout( match, delay);
        }
            setTimeout(resetGuesses, delay);
        
        }
        previousTarget = clicked;
    }
    
}
);

// PLAY AGAIN
function playAgain(){
    $('.grid').empty();
    modal.classList.remove("show");
    
    startGame();
}
