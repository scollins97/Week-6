class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
    getValue(){
        return this.value;
    }
}
class Deck{
    constructor(cards){
        this.cards = [filldeck()];
    }
    fillDeck(){
        let newDeck = [];
        let cardSuits = ["Hearts" , "Spades" , "Diamonds" , "Clubs"];
        for(let i = 0; i < 4; i ++) {
            for(let j = 2; j <= 14; j++) {
                this.newDeck.push(new Card(j, cardSuits[i]));
            }
        }
        return newDeck;
    }
    shuffle() {
        shuffle(this.cards);
    }
    draw() {
        return this.cards.shift();
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
let deck = new Deck();
deck.cards.forEach(element => {
    console.log(element);
});