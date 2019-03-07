var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []
var cardId = cards[0, 1, 2, 3];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
checkForMatch();
}
}

cardsInPlay.push(cards[cardId]);

flipCard(0);
flipCard(2);





// logic to see if two cards have been played
/*if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
} */