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
    getName() {
        return this.name;
    }
    printScore() {
        Console.log(`${this.name} : ${this.score}`);
    }

}

//this is just testing that my deck fills and can be printed
let demoDeck = new Deck();
demoDeck.fillDeck();
//this currently just prints the values of the cards
demoDeck.cards.forEach(element => console.log(element.value));
//this just prints the suits... which means we'll have a lot of the same words on the console
demoDeck.cards.forEach(element => console.log(element.suit));
//testing that deck fills correctly and the list all function
demoDeck.listAllCards();

//start
//let's get a new deck of cards and shuffle it
let deck = new Deck();
deck.fillDeck();
//stopped here because i forget to add a shuffle function
deck.listAllCards();