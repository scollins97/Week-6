class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
    getValue(){
        return this.value;
    }
    //this is mainly to make testing a little easier to read but could 
    //be used as a play by play
    describe(){
        switch(this.value){
            case 2:
                console.log(`Two of ${suit}`);
                break;
            case 3:
                console.log(`Three of ${suit}`);
                break;
             case 4:
                console.log(`Four of ${suit}`);
                break;
            case 5:
                console.log(`Five of ${suit}`);
                break;
            case 6:
                console.log(`Six of ${suit}`);
                break;
            case 7:
                console.log(`Seven of ${suit}`);
                break;
            case 8:
                console.log(`Eight of ${suit}`);
                break;
            case 9:
                console.log(`Nine of ${suit}`);
                break;
            case 10:
                console.log(`Ten of ${suit}`);
                break;
            case 11:
                console.log(`Jack of ${suit}`);
                break;
            case 12:
                console.log(`Queen of ${suit}`);
                break;
            case 13:
                console.log(`King of ${suit}`);
                break;
            case 14:
                console.log(`Ace of ${suit}`);
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
deck.fillDeck();
deck.cards.forEach(element => (element.describe));