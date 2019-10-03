class Game {
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases() //contiene array de Objetos Phrase.
        this.activePhrase = null
    }

    /**
     * Creates an Array of Phrase objects.
     * @return {Array} Phrase Objects.
     */
    createPhrases() {
        let arrayObjectPhrases = []
        for (let i = 0; i < 5; i++) {
            //console.log(i)
            arrayObjectPhrases.push(new Phrase(frases[i]))
        }
        return arrayObjectPhrases

    }

    /**
     * Cleans qwerty bord and lifes, hides start screen and calls getRandomPhrase to set
     * the activePhrase object, then call the methodPhraseToDisplay() from the activePhrase object
     * to add that phrase to the board. 
     */
    startGame() {

        //clean before start
        this.missed = 0
        document.querySelectorAll('.key').forEach(key => key.className = "key")
        document.querySelectorAll('.tries img').forEach(img => img.src = "images/liveHeart.png")



        document.querySelector('#overlay').style.display = "none"
        this.activePhrase = this.getRandomPhrase() //adding random object Phrase in activePhrase.
        this.activePhrase.addPhraseToDisplay()

    }

    /**
     * Retrieves one of the phrases object from the array.
     * @return {Object} 
     */
    getRandomPhrase() {
        //console.log(this.phrases[Math.floor(Math.random() * 4)])
        return this.phrases[Math.floor(Math.random() * 4)]

    }

    /**
     * Checks if the letter is in the phrase board, if it's not, it add class wrong to the qwerty board,
     * and it remove a life, if it is, it add class chosen to the qwerty board and it show the matched letter
     * on the board and it check if we won.
     * @param {String} letter - passed from the the qwerty board and keypad event.
     */
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

                }

            })
        }
    }


    /**
     * selects the the first img with src=`images/winHeart.png` and change it for src=`images/lostHeart.png` then
     * check if it have hit the missed points,if so it call gameOver, if that is not the case, missed is increased.
     * it add heart animation when its left one heart.
     */
    removeLife() {

        let srcNodeList = document.querySelectorAll('.tries img')
        let src = Array.from(srcNodeList) //nodelist to array because i want to use includes.

        for (let i = 0; i <= src.length; i++) {
            if (src[i].src.includes('live')) {
                src[i].src = `images/lostHeart.png`
                break;
            }
        }

        if (this.missed === 4) this.gameOver(); src[4].classList.remove("heartAni");
        this.missed++
        if (this.missed === 4) src[4].classList.add("heartAni")


    }
    /**
     * check from the letters board if there are letters with the class hide left,if not the case
     * it show the starts screen and it add a winer message and class after 1 second.
     */

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
            document.getElementById('phrase').innerHTML = "" //cleaning list
        }, 1000)
    }

    /**
     * it Add animation where it shows the letters of the board consecutively every 75ms
     * and after 2,3 seconds it show the starts screen and it add a lose message and class.
     */
    gameOver() {

        function callInterval() {
            return new Promise((resolve) => {
                let test = document.querySelectorAll('.letter')
                let i = 0;
                let interval = setInterval(function () {
                    if (i < test.length) {
                        test[i].classList.replace("hide", "show")
                        i++;
                    } else {
                        console.log("stop")
                        resolve();
                        clearInterval(interval)
                    }

                }, 150)

            })
        }

        function delay() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    document.querySelector('#overlay').style.display = ""
                    document.querySelector('#game-over-message').textContent = "GAME OVER"
                    if (document.querySelector('#overlay').classList.contains("win")) {
                        document.querySelector('#overlay').classList.replace("win", "lose")
                    }
                    else {
                        document.querySelector('#overlay').classList.add("lose")
                    }
                    document.getElementById('phrase').innerHTML = " " //cleaning list
                    resolve();
                }, 1000)

            })
        }

        callInterval().then(delay)
    }
}
