const express = require('express')
const app = express()
const PORT = 3000
const { engine } = require('express-handlebars')
const userList = require('./users.json')

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views")

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  // find user
  const loginUser = userList.find(user => {
    return user.email.match(email.toLowerCase())
  })

  if ((!loginUser) || (loginUser.password !== password)) {
    res.render('login', { error: true, email: email } )
    return
  }

  res.redirect(`/user/${loginUser.email}`)
  // res.render('welcome', { user: loginUser })
})

app.get('/user/:user_email', (req, res) => {
  const email = req.params.user_email

  const user = userList.find(user => {
    return user.email.match(email)
  })
  
  res.render('welcome', { user })
})

app.listen(PORT, () => {
  console.log(`Login page is running on http://localhost:${PORT}`)
})