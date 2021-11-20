const express = require('express')
const router = express.Router()
const userList = require('../../users.json')

router.get('/:user_email', (req, res) => {
  const email = req.params.user_email

  const user = userList.find(user => {
    return user.email.match(email)
  })

  res.render('welcome', { user })
})

module.exports = router