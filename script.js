/*** CARD (Single Card)***/

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;

  this.toString = cardToString;
  //this.createNode = cardCreateNode;
}

function cardToString() {
  var rank, suit;

  switch (this.rank) {
    case 'A':
      rank = 'Ace';
      break;
    case '2':
      rank = 'Two';
      break;
    case '3':
      rank = 'Three';
      break;
    case '4':
      rank = 'Four';
      break;
    case '5':
      rank = 'Five';
      break;
    case '6':
      rank = 'Six';
      break;
    case '7':
      rank = 'Seven';
      break;
    case '8':
      rank = 'Eight';
      break;
    case '9':
      rank = 'Nine';
      break;
    case '10':
      rank = 'Ten';
      break;
    case 'J':
      rank = 'Jack';
      break;
    case 'Q':
      rank = 'Queen';
      break;
    case 'K':
      rank = 'King';
      break;

    default:
      rank = null;
      break;
  }

  switch (this.suit) {
    case 'C':
      suit = 'Clubs';
      break;
    case 'D':
      suit = 'Diamonds';
      break;
    case 'H':
      suit = 'Hearts';
      break;
    case 'S':
      suit = 'Spades';
      break;

    default:
      suit = null;
      break;
  }

  if (rank === null || suit == null)
    return '';

  return rank + ' of ' + suit;
}

/**/

/*** STACK (multiple cards) ***/

function Stack() {
  // Create an empty array of cards.
  this.cards = new Array();

  /* This method generate a full deck of cards in the stack. */
  this.makeDeck = stackMakeDeck;

  /* This method rendomize the order of the cards currently in the stack*/
  this.shuffle = stackShuffle;

  /* This method simuletas dealing a single card from the stack. The first card is removed from the stack and returned to the caller. */
  this.deal = stackDeal;


  this.draw = stackDraw;
  this.addCard = stackAddCard;
  this.combine = stackCombine;
  this.cardCount = stackCardCount;
}

function stackMake(n) {
  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
    "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  var i, j, k;
  var m;

  // One pack of cards, 53 cards at total.
  m = ranks.length * suits.length;

  // Set array of cards.
  this.cards = new Array(m * n)

  // Fil the array with 'n' packs of cards.
  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < ranks.length; k++)
        this.cards[i * m + j * ranks.length + k] =
          new Card(ranks[k], suits[j]);
}

function stackShuffle(n) {
  var i, j, k;
  var temp;

  // Shuffle the stack 'n' times.
  for (i = 0; i < n; i++)
    for (j = 0; j < this.cards.length; j++) {
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.card[j];
      this.card[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

function stackDeal(n) {
  if (this.cards.length > 0)
    return this.card.shift();
  else
    return null;
}

/**/ 