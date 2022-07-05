const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})










app.listen(port, () => {
    console.log('server is up, continue comerade')
})