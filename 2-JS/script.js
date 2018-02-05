// DOM Objects
var resultContainer = document.getElementById('result');

// Possible options
const k = 1;
const p = 0;
const n = -1;

// Random computer choice function
function random() {
	return Math.floor(Math.random() * 3 - 1);
}

// State keepers
var points = {
	computer: 0,
	player: 0	
};

var player1Name = '',
	player2Name = '';

// Start game
var startPage = document.getElementById('startPage');
var startGame = document.getElementById('startGame');
startGame.onclick = function() {
	startPage.classList.add('invisible');
};


// Player section
// var playerNameElem = document.createElement('h2');
// var playerScoreElem = document.createElement('p');
var player1NameElem = document.getElementById('player1Name');
var player1ScoreElem = document.getElementById('player1Score');
player1NameElem.innerHTML = player1Name;
// playerSection.appendChild(playerNameElem);

// Computer section
// var computerNameElem = document.createElement('h2');
// var computerScoreElem = document.createElement('p');
var player2NameElem = document.getElementById('player2Name');
var player2ScoreElem = document.getElementById('player2Score');
player2NameElem.innerHTML = player2Name;
// computerSection.appendChild(computerNameElem);

// Button click in jQuery and Vanilla JS
var gameButton = document.getElementsByClassName('gameButton');
// jQuery solution

// $('.gameButton').click( function() {
// 	var a = Number(this.getAttribute('data-button'));
// 	play(a);
// });

// Vanilla JS solution
for (var i = 0; i < gameButton.length; i++) {
    var btnNum = gameButton[i];
	btnNum.onclick = function() {
		var a = Number(btnNum.getAttribute('data-button'));
		if (blockButtons() !== 1) {
			play(a);
		}
	};
}

// Game end
function blockButtons() {
	for (const k in points) {
		if (points[k] === 10) {
			return 1;
		}
	}
}
function restart() { 
	if (blockButtons() === 1) {
	restartButtonElem.classList.remove('invisible');
	}
}

function endGame() {
	if (points.computer === 10 ) {
		result = 'The winner is Computer';
	} else  if (points.player === 10){
		result = 'The winner is Player';
	}
}

// Game restart
var restartButtonElem = document.getElementById('restart');
restartButtonElem.onclick = function() {
	points.computer = points.player = 0;
	addPoints();
	restartButtonElem.classList.add('invisible');
};
// Game result
var result = '';
var resultElem = document.createElement('p');




// Game logic
function play(choose) {
	var computer = random();
	if (choose === computer) {
		result = 'tie';
	} else if (
		(choose === 1 && computer === -1) || 
		(choose === 0 && computer === 1) || 
		(choose === -1 && computer === 0)) 
	{
		result = 'player win';
		points.player += 1;
	} else {
		result = 'computer win';
		points.computer += 1;
	}
	restart();
	endGame();
	console.log(points.player);
	console.log(points.computer);
	// Display result of single game
	
	// playerSection.appendChild(playerScoreElem);
	// computerSection.appendChild(computerScoreElem);
	resultElem.innerHTML = result;
	resultContainer.appendChild(resultElem);
	addPoints();
}

function addPoints() {
	player1ScoreElem.innerHTML = 'Player score: ' + points.player;
	player2ScoreElem.innerHTML = 'Computer score: ' + points.computer;
}