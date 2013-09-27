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
			//Reset Counter
			playCount = 1;
			//Clear boardState
			boardState = 0;
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

// Function that places Xs & Os
function playerTurn(id) {
	var cell = document.getElementById(id);
	
	if(cell.innerHTML.length == 0){
		if(isEven(playCount)) {
			cell.innerHTML = "<img class='o' src='resources/images/xo_sprites.png'>";
			cell.className += " placed_o";
			playCount += 1;
			document.getElementById("player").innerHTML = "X";
			if(winCheck(placedItems("o"))){
				alert("O Wins!");
			}
		}
		else if(isEven(playCount) == false) {
			cell.innerHTML = "<img class='x' src='resources/images/xo_sprites.png'>";
			cell.className += " placed_x";
			playCount += 1;
			document.getElementById("player").innerHTML = "O";
			if(winCheck(placedItems("x"))){
				alert("X Wins!");
			}
		}
	}
	else {
			alert("That cell is already full! Please choose another.");
	}
}


//Convert filled cells to number for win check
function placedItems(gp) {
	var boardState = "";
	var cellArray = document.getElementsByClassName("cell");

	for(i=0;i<cellArray.length;++i){
		var workingCell = cellArray[i].className;
		if((workingCell.indexOf("placed_"+gp)) >= 0){
			boardState += "1";
		}
		else {
			boardState += "0";
		}
	}
		return boardState;
		winCheck();
}

//Winning combos
var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];

//Check board state against winners array
function winCheck(str) {
	for(i=0;i<winners.length;++i){
		if(winners[i] == str)
			return true;
	}
}

