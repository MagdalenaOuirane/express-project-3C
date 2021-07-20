const express = require('express')
const app = express()
const path = require('path')
const db = require('./services/db')
const config = require('./config')
const PORT = 3000

//static files
app.use(express.static('public'))
app.use('/js', express.static(__dirname + 'public/js'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/displayTerms.html')
})

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/views/scheduleForm.html')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
