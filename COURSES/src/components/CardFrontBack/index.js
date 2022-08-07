import CardGame from "../CardGame"
import "./styles.css"

function CardFrontBack(){
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target
        const $cardFrontback = $origin.closest('.card-front-back')
        $cardFrontback.classList.toggle('-active')
    }
    return /*html*/ `
        <article class = "card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class = "card  -front">
                ${CardGame()}
            </div>
            <div class = "card  -back">
                ${CardGame("logo-js", "Logo do JavaScript")}
            </div>
        </article>

    `
}
export default CardFrontBack