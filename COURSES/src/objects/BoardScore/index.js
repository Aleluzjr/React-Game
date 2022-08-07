import "./styles.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer"
import PlayerScore from "../../components/PlayerScore"
import ArrowDown from "../../components/ArrowDown"


function BoardScore(){
    return /*html*/ `
        <header class = "board-score">
            ${ArrowDown()}
            ${PlayerName('PlayerOne')}
            ${PlayerScore(1)}

            ${VsPlayer()}
            
            ${PlayerScore(3)}
            ${PlayerName('PlayerTwo')}
            
        </header>

    `
}

export default BoardScore

 