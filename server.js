const express = require('express')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/quackBack', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))