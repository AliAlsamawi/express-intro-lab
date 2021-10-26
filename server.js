
// import modules

import express from 'express'
import * as countryLocation from './data/country-location.js'
// import { find } from './data/country-location.js'
console.log(countryLocation.find)
// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)

// Mount routes
app.get('/home', function (req, res){
  res.render('home')
})

app.get('/', function (req, res){
  res.send("<h1> hello ALi,</h1>")
})

app.get('/country', function(req, res) {
  countryLocation.find({}, function(error, countries) {
    res.render('country/index', {
      countries: countries,
      error: error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3001, function() {
  console.log('Listening on port 3001')
})
