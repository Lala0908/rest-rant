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
      //res.render('places/new')
    })

router.get ('/:id/edit', (req, res)=> {
  res.send('GET edit from stub')
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]){
//     res.render ('error404')
//   }
//   else {
//   res.render ('places/edit', {place: places[id] })
// }
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then (() => {
    res.redirect('/places')

  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // console.log(req.body)
  // if (!req.body.pic) {
  //       // Default image if one is not provided
  //       req.body.pic = 'http://placekitten.com/400/400'
  //     }
  //     if (!req.body.city) {
  //       req.body.city = 'Anytown'
  //     }
  //     if (!req.body.state) {
  //       req.body.state = 'USA'
  //     }
  //     places.push(req.body)
  //     res.redirect('/places')
    })

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
  // let id = Number(req.params.id)
  // if (isNaN(id)){
  //   res.render('error404')
  // }
  // else if (!places[id]) {
  //   res.render('error404')
  // }
  // else {
  //   res.render('places/show', { place: places[id], id })
  //}
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub') 
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('error404')
  // }
  // else if (!places[id]) {
  //   res.render('error404')
  // }
  // else {
  //   places.splice(id, 1)
  //   res.redirect('places')
  // }
})
       
module.exports = router