// Rock, Paper, Scissors
const k = 1,
	p = 0,
	n = -1;

// Random computer choice function
function random() {
	return Math.floor(Math.random() * 3 - 1);
}

// Points
var points = {
	computer: 0,
	player: 0
};

// Names
var names = {
	player1: "",
	player2: ""
};
//.........................................................

//Single or multiplayer

var singleBtnElem = document.getElementById('singlePlayer'),
	multiBtnElem = document.getElementById('multiPlayer'),
	inputNameFormElem = document.getElementById('inputNameForm'),
	labelPlayer2Elem = document.getElementById('labelPlayer2');

singleBtnElem.onclick = function() {
	console.log('click');
	multiBtnElem.classList.add('btn-secondary');
	singleBtnElem.classList.remove('btn-secondary');
	player2NameInputElem.style.display = "none";
	labelPlayer2Elem.style.display = "none";
	inputNameFormElem.style.display = "block";
};

multiBtnElem.onclick = function() {
	console.log('click');
	singleBtnElem.classList.add('btn-secondary');
	multiBtnElem.classList.remove('btn-secondary');
	player2NameInputElem.style.display = "block";
	labelPlayer2Elem.style.display = "block";
	inputNameFormElem.style.display = "block";
};


//.........................................................

// Import player names
var player1NameInputElem = document.getElementById("player1NameInput"),
	player2NameInputElem = document.getElementById("player2NameInput");

function getNames() {
	names.player1 = player1NameInputElem.value;
	names.player2 = player2NameInputElem.value;
}
// Start game
var startPageElem = document.getElementById('startPage'),
	startGameBtn = document.getElementById('startGame');
startGameBtn.onclick = function() {
	startPageElem.classList.add('invisible');
	getNames();
	pushNames();

};
//.........................................................

// Game restart
var restartButtonElem = document.getElementById('restart'),
	changeOpponentsButtonElem = document.getElementById('changeOpponents');

// 
function restart() {
	// clear result
	resultElem.innerHTML = '';
	points.computer = points.player = 0;
	// display 0 score:
	addPoints();
	unlockButtons();
	restartButtonElem.classList.add('invisible');
	changeOpponentsButtonElem.classList.add('invisible');
}
// Back to initial screen to input new names
changeOpponentsButtonElem.onclick = function() {
	restart();
	startPageElem.classList.remove('invisible');
};

// Start new game with same names
restartButtonElem.onclick = function() {
	restart();
};
//.........................................................

// Player1 and 2 elements
var player1NameElem = document.getElementById('player1Name'),
	player2NameElem = document.getElementById('player2Name');

// Display names
function pushNames() {
	player1NameElem.innerHTML = names.player1;
	player2NameElem.innerHTML = names.player2;
}
//.........................................................

// Game end
var gameButton = document.getElementsByClassName('gameButton');

for (var i = 0; i < gameButton.length; i++) {
	var btnNum = gameButton[i];
	btnNum.onclick = function() {
		var a = Number(btnNum.getAttribute('data-button'));
		if (blockGame() !== 1) {
			// starts single game
			play(a);
		}
	};
}

// check if any of player is having 10 points
function blockGame() {
	for (const k in points) {
		if (points[k] === 10) {
			lockButtons();
			return 1;
		}
	}
}

function lockButtons() {
	for (var b = 0; b < gameButton.length; b++) {
		gameButton[b].classList.add('disabled');
	}
}

function unlockButtons() {
	for (var b = 0; b < gameButton.length; b++) {
		gameButton[b].classList.remove('disabled');
	}
}

function showRestartBtn() {
	if (blockGame() === 1) {
		restartButtonElem.classList.remove('invisible');
		changeOpponentsButtonElem.classList.remove('invisible');
	}
}
//.........................................................

// Final result
function finalResult() {
	if (points.computer === 10) {
		result = 'The winner is ' + names.player2;
	} else if (points.player === 10) {
		result = 'The winner is ' + names.player1;
	}
}
// Single game result
var resultElem = document.getElementById('result'),
	result = '';
//.........................................................

// Add points
var player1ScoreElem = document.getElementById('player1Score'),
	player2ScoreElem = document.getElementById('player2Score');

function addPoints() {
	player1ScoreElem.innerHTML = 'score: ' + points.player;
	player2ScoreElem.innerHTML = 'score: ' + points.computer;
}
//.........................................................

// GAME
function play(choose) {
	var computer = random();
	if (choose === computer) {
		result = 'tie';
	} else if (
		(choose === 1 && computer === -1) ||
		(choose === 0 && computer === 1) ||
		(choose === -1 && computer === 0)) {
		result = names.player2 + ' win';
		points.player += 1;
	} else {
		result = names.player1 + ' win';
		points.computer += 1;
	}
	// First finalresult - changing result to final first
	finalResult();
	resultElem.innerHTML = result;
	addPoints();
	showRestartBtn();
}