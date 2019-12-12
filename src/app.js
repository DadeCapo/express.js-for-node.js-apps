const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        title: "Capo's Weather",
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
        message: "Capito is Coming To Help",
        title: 'Help',
        name: 'Dade Capo'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Provide Address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
    
        forecast( latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
    
            res.send({
                forecast: forecastData, location,
                adress: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You Must Search Something'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Code Capo',
        errorMessage: 'Not enough help'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Code Capo',
        errorMessage: 'Eh Eh Eh Wrong Way'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})