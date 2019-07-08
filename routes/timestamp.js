const express = require('express')
const router = express.Router()

// Get /api/timestamp/:date_string?
router.route('/:date_string').get(function(req, res, next) {
  const date_string = req.params.date_string.includes('-')
    ? req.params.date_string
    : parseInt(req.params.date_string)
  try {
    const date = new Date(date_string)
    res.send({ unix: date.getTime(), utc: date.toUTCString() })
    // next()
  } catch (error) {
    res.send({ error: 'Invalid Date' })
  }
})
router.route('/').get(function(req,res,nex){
  const date = new Date()
   res.send({ unix: date.getTime(), utc: date.toUTCString() })
  //  next()
})

module.exports = router
/*
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"} */
