const router = require ('express').Router()
const db = require('../models')

router.get('/', (req, res)=> {
  //res.render('controllers')
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places} )
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
    }) 
    

router.get('/new', (req, res) => {
  res.render('places/new')
    })

router.get ('/:id/edit', (req, res)=> {
  res.send('GET edit from stub')
})

router.post('/', (req, res) => {
  if (!req.body.pic) req.body.pic = undefined
  if (!req.body.city) req.body.city = undefined
  if (!req.body.state) req.body.state = undefined
  db.Place.create(req.body)
  .then (() => {
    res.redirect('/places')

  })
  .catch(err => {
    if (err && err.name == "ValidationError") {
      let message = "Validation Error: "
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
     }
  })
 })

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  //.polulate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub') 
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
 })
       
module.exports = router