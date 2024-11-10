

const fortunes = require('./fortunes.json')

function getFortune(){

    const randomFortune = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomFortune]

}

module.exports = { getFortune }