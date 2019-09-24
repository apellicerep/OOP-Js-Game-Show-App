class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

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

    checkLetter(letter) {
        return this.phrase.includes(letter) ? true : false;
    }

    showMatchedLetter(letter) {
        document.querySelectorAll('.letter').forEach(lett => {
            if (lett.textContent === letter) lett.classList.replace("hide", "show")
        })
    }

}