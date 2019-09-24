class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases() //contiene array de Objetos Phrase.
        this.activePhrase = null
    }

    createPhrases() {

        let arrayObjectPhrases = []
        for (let i = 0; i < 5; i++) {
            //console.log(i)
            arrayObjectPhrases.push(new Phrase(frases[i]))
        }
        return arrayObjectPhrases

    }

    startGame() {
        document.querySelector('#overlay').style.display = "none"
        this.activePhrase = this.getRandomPhrase() //adding random object Phrase in activePhrase.
        this.activePhrase.addPhraseToDisplay()
        console.log(this.activePhrase)


    }

    getRandomPhrase() {
        //console.log(this.phrases[Math.floor(Math.random() * 4)])
        return this.phrases[Math.floor(Math.random() * 4)]

    }

    handleInteraction(letter) {

        console.log("handle Interaction")

    }

    removeLife() {

    }

    ceckForWin() {


    }

    gameOver() {

    }



}