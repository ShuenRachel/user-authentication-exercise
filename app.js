const express = require('express')
const app = express()
const PORT = 3000
const { engine } = require('express-handlebars')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views");

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(PORT, () => {
  console.log(`Login page is running on http://localhost:${PORT}`)
})