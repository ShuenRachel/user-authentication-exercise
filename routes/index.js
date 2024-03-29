const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const home = require('./modules/home')

router.use('/', login)
router.use('/users', home)

module.exports = router