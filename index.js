const express = require("express")
const mongoose = require('mongoose')

const app = express()
const methodOverride = require('method-override')

//MIDDLEWARES
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Routes
app.use("/places", require("./controllers/places"))

// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.render("home")
  })
app.get("*", (req, res) => {
    res.render('error404')
  })
  
app.listen(process.env.PORT, console.log(process.env.PORT))
