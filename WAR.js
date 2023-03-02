class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
    //this is mainly to make testing a little easier to read but could 
    //be used as a play by play
    describe(){
        switch(this.value){
            case 2:
                console.log(`Two of ${this.suit}`);
                break;
            case 3:
                console.log(`Three of ${this.suit}`);
                break;
             case 4:
                console.log(`Four of ${this.suit}`);
                break;
            case 5:
                console.log(`Five of ${this.suit}`);
                break;
            case 6:
                console.log(`Six of ${this.suit}`);
                break;
            case 7:
                console.log(`Seven of ${this.suit}`);
                break;
            case 8:
                console.log(`Eight of ${this.suit}`);
                break;
            case 9:
                console.log(`Nine of ${this.suit}`);
                break;
            case 10:
                console.log(`Ten of ${this.suit}`);
                break;
            case 11:
                console.log(`Jack of ${this.suit}`);
                break;
            case 12:
                console.log(`Queen of ${this.suit}`);
                break;
            case 13:
                console.log(`King of ${this.suit}`);
                break;
            case 14:
                console.log(`Ace of ${this.suit}`);
                break;

        }
    }
}
class Deck{
    constructor(cards){
        this.cards = [];
    }
    fillDeck(){
        let cardSuits = ["Hearts" , "Spades" , "Diamonds" , "Clubs"];
        for(let i = 0; i < 4; i ++) {
            for(let j = 2; j <= 14; j++) {
                this.cards.push(new Card(j, cardSuits[i]));
            }
        }
    }
    //incomplete. I need to come up with a way to shuffle these
    shuffle() {
    }
    draw() {
        return this.cards.shift();
    }
    listAllCards() {
        this.cards.forEach(element => element.describe());
    }
}
class Player{
    constructor(name, hand, score){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    flip() {
        return this.hand.shift();
    }
    draw(theDeck) {
        this.hand.push(theDeck.draw());
    }
    incrementScore() {
        this.score ++;
    }
    getScore() {
        return this.score;
    }
    scoreIncrementer(number) {
        this.score += number;
    }
    getName() {
        return this.name;
    }
    printScore() {
        console.log(`${this.name} : ${this.score}`);
    }
    listAllCards() {
        this.hand.forEach(element => element.describe());
    }

}
function getRandomSortValue() {
    return Math.floor(Math.random() * (3 + 1) - 2);
}

//start of the main Process

//creating player one and two
let player1 = new Player('Player 1');
let player2 = new Player('Player 2');
//creating a new (empty) deck of cards
let deck = new Deck();
//filling the deck of cards with standard 52 cards
deck.fillDeck();
//the deck needs to be shuffled
deck.cards.sort(getRandomSortValue);
//lets split the deck into two equal parts
player1.hand = deck.cards.splice(0, 26);
player2.hand = deck.cards.splice(-26);
//now lets pit the top of each players hand against each other for 26 times
let card1 = null;
let card2 = null;
for(i = 1; i <= 26; i ++) {
    card1 = player1.hand.shift();
    card2 = player2.hand.shift();
    //if player one has the better card
    if(card1.value > card2.value) {
        player1.incrementScore();
        console.log("Player 1's card is");
        card1.describe();
        console.log("Player 2's card is");
        card2.describe();
        console.log(`----------------------------------------------------`);
    }
    //vise versa 
    else if(card2.value > card1.value) {
        player2.incrementScore();
        console.log("Player 1's card is");
        card1.describe();
        console.log("Player 2's card is");
        card2.describe();
        console.log(`----------------------------------------------------`);
    }
}
player1.printScore();
player2.printScore();

if(player1.score > player2.score) {
    alert('Player 1 wins!');
}else if(player1.score < player2.score) {
    alert('Player 2 wins!');
}else{
    alert("It's a draw");
}
