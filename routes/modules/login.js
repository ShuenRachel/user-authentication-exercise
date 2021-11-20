const express = require('express')
const router = express.Router()
const userList = require('../../users.json')

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body

  // find user
  const loginUser = userList.find(user => {
    return user.email.match(email.toLowerCase())
  })

  if ((!loginUser) || (loginUser.password !== password)) {
    res.render('login', { error: true, email: email })
    return
  }

  res.redirect(`/users/${loginUser.email}`)
})

module.exports = router