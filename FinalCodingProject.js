class Card {
  constructor(_suit, _value) {
    this.suit = _suit;
    this.value = _value;
    this.displayValue = this._getDisplayValue(_value);
  }

  _getDisplayValue(value) {
    const valueMap = {
      11: 'J',
      12: 'Q',
      13: 'K',
      14: 'A'
    };

    return valueMap[value] || value;
  }
}

class Deck {
  suits = ["♥", "♣", "♦", "♠"];
  values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  cards = [];

  constructor() {
    // this code starts executing, once the class is created
    this.suits.forEach(suit => {
      this.values.forEach(value => {
        const cardObject = new Card(suit, value);
        this.cards.push(cardObject);
      });
    });
  }


  shuffleDeck() {
    // deck shuffling happens here
    for (let deckIndex = this.cards.length - 1; deckIndex >= 0; deckIndex--) {
      const randomNumber = Math.random();
      const randomNumberWithinIndex = randomNumber * (deckIndex + 1);
      const roundedIndex = Math.floor(randomNumberWithinIndex);
      //    [deck[deckIndex], deck[roundedIndex]] = [deck[roundedIndex], deck[deckIndex]]; could also work in place of the code on lines 37 through 39
      const temp = this.cards[deckIndex];
      this.cards[deckIndex] = this.cards[roundedIndex];
      this.cards[roundedIndex] = temp;
    }
    return this.cards;
  }
}

let deck = new Deck();

deck.shuffleDeck();


console.log(deck.cards.length);

// Dealing to players 
const player1Cards = [];
const player2Cards = []; // Creating an empty array for each player

while (deck.cards.length > 0) {
  player1Cards.push(deck.cards.shift());
  player2Cards.push(deck.cards.shift());
} // Pushing cards from Deck to each player's deck


// Each player plays a card

let player1Points = 0;
let player2Points = 0;


function playACard(player1Cards, player2Cards){
for (let i=0; i < player1Cards.length; i++){
  const card1 = player1Cards[i]; // Draw a card from Player 1's deck
  const card2 = player2Cards[i]; // Draw a card from Player 2's deck
  console.log('Player 1 pulls ' + card1.suit + card1.displayValue + '. Player 2 pulls ' + card2.suit + card2.displayValue);
  if (card1.value > card2.value) {
  console.log("Player 1 wins this round!");
  player1Points++;
} else if (card1.value < card2.value) {
  console.log("Player 2 wins this round!");
  player2Points++;
} else {
  console.log("It's a tie!");
}
}
}
playACard(player1Cards, player2Cards);


console.log("Player 1 has " + player1Points + "points. Player 2 has " + player2Points + "points.")

if (player1Points > player2Points){
    console.log ("PLAYER 1 WINS THE GAME!!!");
} else if (player1Points < player2Points){
    console.log ("PLAYER 2 WINS THE GAME!!!");
} else {
    console.log ("It's a draw! Hit refresh to play again!");
}
