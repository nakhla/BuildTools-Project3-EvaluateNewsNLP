var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

let port = 8081
const app = express()

app.use(express.static(path.join(__dirname, '../../dist')))
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

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
