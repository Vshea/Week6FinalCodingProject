var expect = chai.expect

describe('playACard', function(){
    describe('#doSomething', function(){
        it('checking to make sure deck has 52 cards', function() {
            let deck = new Deck();
            console.log(deck);
            expect(deck.cards.length).to.equal(52);
        });
        it('should shuffle deck', function() {
            let deck = new Deck();
            expect(deck).to.not.equal(deck.shuffleDeck());
        })
    });
});