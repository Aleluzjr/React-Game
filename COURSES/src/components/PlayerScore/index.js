import './styles.css'

function PlayerScore(points = '0'){
    return /*html*/`
        <ol class = 'player-score' data-points = "${points}">
            <li class = 'points'> Um </li>
            <li class = 'points'> Dois </li>
            <li class = 'points'> Tres </li>
        </ol>

    `
}

export default PlayerScore