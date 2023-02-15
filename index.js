require('dotenv').config()
const express = require("express")

const app = express()

//MIDDLEWARES
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Routes
app.use("/places", require("./controllers/places"))




app.get('/', (req, res) => {
    res.render("home")
  })
app.get("*", (req, res) => {
    res.render('error404')
  })
// GET /places
// app.get('/', (req, res) => {
//   console.log('index')
//   let places = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'http://placekitten.com/250/250'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: 'http://placekitten.com/250/250'
//   }]
  
//     res.render('places/index', {places})
  // })
  
app.listen(process.env.PORT, console.log(process.env.PORT))
