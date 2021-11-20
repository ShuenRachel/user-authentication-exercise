const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('This is for login page')
})

app.listen(PORT, () => {
  console.log(`Login page is running on http://localhost:${PORT}`)
})