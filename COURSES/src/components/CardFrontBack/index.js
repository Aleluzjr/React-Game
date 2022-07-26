import CardGame from "../CardGame"

function CardFrontBack(){
    return /*html*/ `
        <article>
            ${CardGame()}
            ${CardGame()}
        </article>

    `
}

export default CardFrontBack