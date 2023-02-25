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

  if(rank === null || suit == null)
  return '';

  return rank + ' of ' + suit;
}

/**/
//var myCard = new Card("3", "C");
//alert(myCard.toString());

/*** STACK (multiple cards) ***/
function Stack() {
  // Create an empty array of cards.

  this.cards = new Array();

  this.makeDeck = stackMakeDeck;
  this.shuffle = stackShuffle;
  this.deal = stackDeal;
  this.draw = stackDraw;
  this.addCard = stackAddCard;
  this.combine = stackCombine;
  this.cardCount = stackCardCount;
}

// Generate a full deck of cards in the stack.

function stackMake(n) {
  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
  "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  var i, j, k;
  var m;

  m = ranks.length * suits.length;
}

/**/ 