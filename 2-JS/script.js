const k = 1;
const p = 0;
const n = -1;

function random() {return Math.round(Math.random() * 2 - 1);}

var computerPoints = 0;
var playerPoints = 0;
var btn = document.getElementsByClassName('btn');

$('button').click( function() {
	var a = Number(this.getAttribute('data-button'));
	play(a)
});

function play(choose) {
	var computer = random();
	console.log(choose);
	console.log(computer);
	if (choose === computer) {
		console.log('tie');
	} else if (choose === 1 && computer === -1) {
		console.log('player win');
		playerPoints += 1;
	} else if (choose === 0 && computer === 1) {
		console.log('player win');
		playerPoints += 1;
	} else if (choose === -1 && computer === 0) {
		console.log('player win');
		playerPoints += 1;
	} else {
		console.log('computer win');
		computerPoints += 1;
	}
}
