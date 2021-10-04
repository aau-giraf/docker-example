'use strict'

import express from 'express'
import router from './presentation/router.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use('/', router)

app.listen(8080, () => {
    console.log("Listening to:")
    console.log(router.stack)
})
