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

        if (this.activePhrase.checkLetter(letter) === false) {
            document.querySelectorAll('button').forEach(key => {
                if (key.textContent === letter) {
                    key.classList.add("wrong")
                    this.removeLife()
                }

            })
        } else {
            document.querySelectorAll('button').forEach(key => {
                if (key.textContent === letter) {
                    key.classList.add("chosen")
                    this.activePhrase.showMatchedLetter(letter)
                    //this.removeLife()
                    //this.checkForWin()
                    //this.gameOver()
                }

            })
        }
    }

    removeLife() {

        if (this.missed === 4) this.gameOver();

        let srcNodeList = document.querySelectorAll('.tries img')
        let src = Array.from(srcNodeList) //nodelist to array because i want to use includes.

        for (let i = 0; i < src.length; i++) {
            if (src[i].src.includes('live')) {
                src[i].src = `images/lostHeart.png`
                break;
            }
        }
        this.missed++
    }

    ceckForWin() {


    }

    gameOver() {
        console.log("game over")

    }



}