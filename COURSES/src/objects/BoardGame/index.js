import CardGame from "../../components/CardGame"
import './styles.css'

function BoardGame (amountCards){
    const $htmlCardGame = CardGame()
    const $htmlContent = CardGame().repeat(amountCards)
    return `
        <section class = "board-game">
            ${$htmlContent}
        </section>
    `
 }

export  default BoardGame