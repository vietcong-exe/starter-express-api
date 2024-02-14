const express = require('express')
const app = express()
app.post('/', (req, res) => {
    const { username } = req.body
    res.send(`Yo! ${username}`)
})
app.listen(process.env.PORT || 3000)
