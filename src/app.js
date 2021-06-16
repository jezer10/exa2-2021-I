const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const detalleRouter = require('./routes/api/detalleRouter')
const matriculaRouter = require('./routes/api/matriculaRouter')
const authRouter = require('./routes/api/auth')
const userRouter = require('./routes/api/userRouter')
const app = express()
app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send('HELLO WORLD!')
})
app.use('/auth', authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/detalles', detalleRouter)
app.use('/api/v1/matriculas', matriculaRouter)


module.exports = app