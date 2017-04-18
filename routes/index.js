var express = require('express')
var router = express.Router()
var knex = require('../db/connection')


//HOME PAGE - SEE ALL COOKIES
router.get('/', (req, res, next) => {
  knex('cookies')
  .select('*')
  .where(req.query)
  .then(cookies => {
    res.json({ cookies })
  })
})

//SHOW PAGE - SEE ONE COOKIE
router.get('/cookies/:id', (req, res, next) => {
  let id = req.params.id
  knex('cookies')
  .select('*')
  .where('id', id)
  .then(cookie => {
    res.json({ cookie })
  })
})



module.exports = router;
