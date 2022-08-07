import './styles.css'

function PlayerScore(points = '0'){
    return /*html*/`
        <ol data-points = "${points}" class = 'player-score' >
            <li> Um </li>
            <li> Dois </li>
            <li> Tres </li>
        </ol>

    `
}

export default PlayerScore