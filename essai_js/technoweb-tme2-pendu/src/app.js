const random = require('random')

const dico = require('./dico.js')

const pendu = require("./pendu.js")
const ticking_pendu = require("./ticking_pendu.js")
Promise.resolve(dico.litAsync("./dico.txt", 5).then((result) => {
    let mot = result[Math.floor(Math.random() * result.length)]
    let jeu = new ticking_pendu.PenduTemps(mot, 5, 10)
    jeu.play().then(e => {
        console.log(e)
        process.exit(1)
    }).catch(e => {
        console.log(e)
        process.exit(1)
    })

}))

