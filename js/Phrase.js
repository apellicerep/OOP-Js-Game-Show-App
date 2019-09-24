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
        console.log(html)
        document.getElementById('phrase').innerHTML = html
    }

    checkLetter() {


    }

    showMatchedLetter() {

    }

}