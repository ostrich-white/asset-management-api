import {config} from 'dotenv'
import express from "express";
config()
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome World')
})

app.listen(process.env.PORT, () => {
    console.log('Server running on port:' + process.env.PORT);
})
