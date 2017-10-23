/*

	CONTENTS

	1. Set all variables
	2. Define functions
	3. Assign funtions to buttons
	4. Update clock every second

*/


// 1. Set all variables
var clock = document.getElementsByClassName('clock')[0],
	secondHand = document.getElementsByClassName('seconds')[0],
	minuteHand = document.getElementsByClassName('minutes')[0],
	hourHand = document.getElementsByClassName('hours')[0],

	bonusButton = document.getElementsByClassName('bonus')[0],
	undoButton = document.getElementsByClassName('undo')[0],
	resetButton = document.getElementsByClassName('reset')[0],

	seconds = 0,
	minutes = 0,
	hours = 0,

	bonus = 0;

// 2. Define functions
function updateBonus() {
	document.getElementsByClassName("bonus-counter")[0].innerHTML = bonus;
}

function plusBonus() {
	bonus++;
	updateBonus();
}

function undoBonus() {
	if (bonus != 0) {
		bonus--;
	}
	updateBonus();
}

function resetClock() {
	bonus = 0;
	updateBonus();
}

function updateClock() {
	currentTime = new Date(),
	seconds = currentTime.getSeconds() * 6,
	minutes = currentTime.getMinutes() * 6 + (bonus * 6),
	hours = (currentTime.getHours() * 30) + (( currentTime.getMinutes() + bonus) / 2);

	secondHand.style.WebkitTransform = "rotate(" + seconds + "deg)";
	secondHand.style.transform = "rotate(" + seconds + "deg)";

	minuteHand.style.WebkitTransform = "rotate(" + minutes + "deg)";
	minuteHand.style.transform = "rotate(" + minutes + "deg)";

	hourHand.style.WebkitTransform = "rotate(" + hours + "deg)";
	hourHand.style.transform = "rotate(" + hours + "deg)";
}

// 3. Assign functions to buttons
bonusButton.addEventListener('click', plusBonus, false);
undoButton.addEventListener('click', undoBonus, false);
resetButton.addEventListener('click', resetClock, false);
clock.addEventListener('click', plusBonus, false);

// 4. Update clock every second
var startClock = setInterval(function () {
	updateClock();
}, 1000);