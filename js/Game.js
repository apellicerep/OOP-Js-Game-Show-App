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

        //clean before start
        this.missed = 0
        document.querySelectorAll('.key').forEach(key => key.className = "key")
        document.querySelectorAll('.tries img').forEach(img => img.src = "images/liveHeart.png")


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
                    this.checkForWin()
                    //this.gameOver()
                }

            })
        }
    }

    removeLife() {

        let srcNodeList = document.querySelectorAll('.tries img')
        let src = Array.from(srcNodeList) //nodelist to array because i want to use includes.

        for (let i = 0; i <= src.length; i++) {
            if (src[i].src.includes('live')) {
                src[i].src = `images/lostHeart.png`
                break;
            }
        }

        if (this.missed === 4) this.gameOver();
        this.missed++


    }

    checkForWin() {
        let letras = document.querySelectorAll('.letter')
        for (let letters of letras) {
            if (letters.classList.contains("hide")) return;
        }
        setTimeout(() => {
            document.querySelector('#overlay').style.display = ""
            document.querySelector('#game-over-message').textContent = "YOU WIN"
            if (document.querySelector('#overlay').classList.contains("lose")) {
                document.querySelector('#overlay').classList.replace("lose", "win")
            }
            else {
                document.querySelector('#overlay').classList.add("win")
            }
        }, 1000)
    }

    gameOver() {

        function callInterval() {
            let test = document.querySelectorAll('.letter')
            let i = 0;
            let interval = setInterval(function () {
                if (i < test.length) {
                    test[i].classList.replace("hide", "show")
                    i++;
                } else {
                    console.log("stop")
                    clearInterval(interval)
                }

            }, 75)

        }

        callInterval();



        setTimeout(() => {
            document.querySelector('#overlay').style.display = ""
            document.querySelector('#game-over-message').textContent = "GAME OVER"
            if (document.querySelector('#overlay').classList.contains("win")) {
                document.querySelector('#overlay').classList.replace("win", "lose")
            }
            else {
                document.querySelector('#overlay').classList.add("lose")
            }
            //document.querySelector('#overlay').classList.add("lose")
        }, 2300)

    }
}
