const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//path to publick and path to remplate Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
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
        message: "Capito's Help Message",
        title: 'Help',
        name: 'Dade Capo'
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