// DOM Objects
var resultContainer = document.getElementById('result')

// Possible options
const k = 1;
const p = 0;
const n = -1;

// Random computer choice function
function random() {return Math.round(Math.random() * 2 - 1);}

// State keepers
var computerPoints = 0;
var playerPoints = 0;
var playerName = '';

// Button click in jQuery and Vanilla JS
// jQuery solution
var btn = document.getElementsByClassName('btn');

// $('button').click( function() {
// 	var a = Number(this.getAttribute('data-button'));
// 	play(a);
// });

//Vanilla JS solution
for(var i = 0; i < btn.length; i++) {
    var btnNum = btn[i];   
    btnNum.onclick = function() {
    	var a = Number(btnNum.getAttribute('data-button'));
 		play(a);
    };
}


// Game result
var result = '';
var resultElem = document.createElement('h2');


// Game logic
function play(choose) {
	var computer = random();
	console.log(choose);
	console.log(computer);
	if (computerPoints === 10 || playerPoints === 10) {
		if (computerPoints === 10) {
			result = 'The winner is Computer';
		} else {
			result = 'The winner is Player';
		};
	} else if (choose === computer) {
		result = 'tie';
	} else if ((choose === 1 && computer === -1) || (choose === 0 && computer === 1) || (choose === -1 && computer === 0)) {
		result = 'player win';
		playerPoints += 1;
	} else {
		result = 'computer win';
		computerPoints += 1;
	}
	// Display result of single game
	resultElem.innerHTML = result;
	resultContainer.appendChild(resultElem);
}
