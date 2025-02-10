const SUIT = {
  Heart: 0,
  Diamond: 1,
  Spade: 2,
  Club: 3,
};
const RANK = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

function Card(suit, rank) {
  this.Suit = suit;
  this.Rank = rank;
}

Card.prototype.toString = function () {
  console.log(`${this.Rank} of ${this.Suit}`);
};

function Deck() {
  this.Cards = getCards();

  function getCards() {
    let deckCards = [];

    Object.keys(SUIT).forEach((suit) => {
      Object.keys(RANK).forEach((rank) => {
        deckCards.push(new Card(suit, rank));
      });
    });
    return deckCards;
  }
}

Deck.prototype.print = function () {
  this.Cards.forEach((card) => {
    card.toString();
  });
};

Deck.prototype.shuffle = function () {
  for (let i = 0; i < this.Cards.length; i++) {
    const j = Math.floor(Math.random() * this.Cards.length);
    const temp = this.Cards[i];
    this.Cards[i] = this.Cards[j];
    this.Cards[j] = temp;
  }
};

Deck.prototype.sort = function () {
  this.Cards = this.Cards.sort((a, b) => parseInt(RANK[a.Rank]) - parseInt(RANK[b.Rank]));
};

const deck = new Deck();
deck.print();

console.log("\nShuffling...\n\n");
deck.shuffle();
deck.print();
console.log("deck.Cards.length:", deck.Cards.length);

console.log("\nSorting...\n\n");
deck.sort();
deck.print();
