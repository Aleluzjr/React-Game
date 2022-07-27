import CardGame from "../CardGame"
import "./styles.css"

function CardFrontBack(){
    return /*html*/ `
        <article class = "card-front-back">
            ${CardGame()}
            ${CardGame("logo-js", "Logo do JavaScript")}
            ${CardGame("logo-css", "Logo do CSS")}
            ${CardGame("logo-html", "Logo do HTML")}
        </article>

    `
}
export default CardFrontBack