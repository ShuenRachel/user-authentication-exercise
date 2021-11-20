const express = require('express')
const app = express()
const PORT = 3000
const { engine } = require('express-handlebars')
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set("views", "./views")

app.use(express.static('public'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Login page is running on http://localhost:${PORT}`)
})