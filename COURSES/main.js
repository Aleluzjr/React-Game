import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardScore from './src/objects/BoardScore'
import CardFrontBack from './src/components/CardFrontBack'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
    "beforeend",
    `   
        ${BoardScore()}
        ${BoardGame(6)}


    `
)

