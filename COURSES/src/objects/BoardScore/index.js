import "./styles.css"
import PlayerName from "../../components/PlayerName"
function BoardScore(){
    return /*html*/ `
        <header class = "board-score">
            ${PlayerName('PlayerOne')}
            ${PlayerName('PlayerTwo')}
        
        </header>

    `
}

export default BoardScore

 