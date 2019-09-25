class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

    /**
     * Generates the html code based on the phrase property of the activePhrase object and
     * add it in the Dom.
     */
    addPhraseToDisplay() {
        let html = "<ul>";
        let letterSplit = this.phrase.split("");

        for (let letter of letterSplit) {
            if (letter === " ") {
                html += `<li class="space"> </li>`
            } else {
                html += `<li class="hide letter h">${letter}</li>`
            }

        }
        html += "</ul>"

        document.getElementById('phrase').innerHTML = html
    }
    /**
     * Check if the letter is included in the phrase.
     * @param {String} letter - from the qwerty board and keypad event.
     */
    checkLetter(letter) {
        return this.phrase.includes(letter) ? true : false;
    }
    /**
     * show every letter from the board that matches letter adding the class show.
     * @param {String} letter - from the qwerty board and keypad event.
     */
    showMatchedLetter(letter) {
        document.querySelectorAll('.letter').forEach(lett => {
            if (lett.textContent === letter) lett.classList.replace("hide", "show")
        })
    }

}