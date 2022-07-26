import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from './src/objects/BoardGame'
import BoardScore from './src/objects/BoardScore'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
    "beforeend",
    `   
        ${BoardScore()}
        ${BoardGame(6)}

    `
)

