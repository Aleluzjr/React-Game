import "./styles.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer"


function BoardScore(){
    return /*html*/ `
        <header class = "board-score">
            ${PlayerName('PlayerOne')}
            ${VsPlayer()}
            ${PlayerName('PlayerTwo')}
        </header>

    `
}

export default BoardScore

 