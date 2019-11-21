const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Capo's Weather Page",
        name: 'Dade Capo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Dade',
        name: 'Dade Capo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "Capito's Message"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Miami',
        forecast: 'All the types of weathers in one day!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})