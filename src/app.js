const express = require('express')

const app = express()

//app.com
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name: 'Simon'
    },{
        name: 'Laura'
    }])
})

//app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>This is a COOL page!</h1>')
})

//app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        location: 'Miami',
        forecast: 'All the types of weathers in one day!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})