/*
	javascripts for Evan Pavlica's Tiq Taq Toe
	General Assembly - Los Angeles
	Web Development Immersive, Sep 2013

*/

// Clear Cell Contenets for New Game
function clearCells() {
	i = 0;
	var allCells = document.getElementsByClassName("cell");
		while(i < allCells.length){
			allCells[i].innerHTML='';
			i += 1;
		}
}			

//Help function for playerTurn to determine if playCount is even
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

//Counter for determining who's turn it is
var playCount = 1;

//
function playerTurn(id) {
	if(isEven(playCount)) {
		document.getElementById(id).innerHTML = "<img class='o' src='resources/images/xo_sprites.png'>";
	}
	else {
		document.getElementById(id).innerHTML = "<img class='x' src='resources/images/xo_sprites.png'>";
	}
	playCount += 1;
}