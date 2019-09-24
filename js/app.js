const frases = ["filming a movie", "milking a cow", "making a pizza", "playing baseball", "playing soccer"]
const game = new Game()



document.querySelector('#btn__reset').addEventListener("click", () => game.startGame())

document.querySelector('#qwerty').addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") game.handleInteraction(e.target.textContent)

})