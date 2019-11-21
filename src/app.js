const express = require('express')

const app = express()

//app.com
app.get('', (req, res) => {
    res.send('Hello Capito')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send('Help Page')
})

//app.com/about
app.get('/about', (req, res) => {
    res.send('About Capito')
})

//app.com/weather
app.get('/weather', (req, res) => {
    res.send('Say it dont spray it')
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})