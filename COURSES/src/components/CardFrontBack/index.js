import CardGame from "../CardGame"
import "./styles.css"



function CardFrontBack(){
    window.handleClick = () => {
        console.log('Foi')
    }

    return /*html*/ `
        <article class = "card-front-back" onClick="handleClick()">
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