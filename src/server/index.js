var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
let port = 8081
const app = express()

app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.json())
if (process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    app.use(cors())
    port = 8085
}

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.post('/test', function (req, res) {
    const { articleUrl } = req.body
    const lang = 'en'
    const key = process.env.API_KEY
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=${lang}&url=${articleUrl}`

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
        .then(raw => raw.json())
        .then(response => res.json(response))
        .catch(err => {
            console.error({ err })
            res.status(500).send()
        })


})
