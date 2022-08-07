import "./styles.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer"
import PlayerScore from "../../components/PlayerScore"


function BoardScore(){
    return /*html*/ `
        <header class = "board-score">
            ${PlayerName('PlayerOne')}
            ${PlayerScore(2)}

            ${VsPlayer()}

            ${PlayerName('PlayerTwo')}
            ${PlayerScore(1)}
        </header>

    `
}

export default BoardScore

 