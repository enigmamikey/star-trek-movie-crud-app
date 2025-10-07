const express = require('express')
const app = express()
const PORT = 8000

const movies = [
    'Star Trek: The Motion Picture',
    'Star Trek II: The Wrath of Khan',
    'Star Trek III: The Search for Spock',
    'Star Trek IV: The Voyage Home',
    'Star Trek V: The Final Frontier',
    'Star Trek VI: The Voyage Home',
    'Star Trek: Generations',
    'Star Trek: First Contact',
    'Star Trek: Insurrection',
    'Star Trek: Nemesis',
    'Star Trek',
    'Star Trek: Into Darkness',
    'Star Trek: Beyond',
    'Star Trek: Section 31'
]

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/movie', (req,res) => {
    res.json({title: movies[Math.floor(Math.random()*movies.length)]})
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch it!!!`)
})