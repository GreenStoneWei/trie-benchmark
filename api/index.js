const { Router } = require('express')
const { search, load } = require('./controller/complete')
const router = Router()

router.get('/search', search)
router.post('/load', load)

module.exports = router
