const router = require ('express').Router()

router.get('/', (req, res)=> {
    console.log('controllers')
    //res.render('places/index')
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
  }]
  
    res.render('places/index', {places})
})



module.exports = router