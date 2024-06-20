import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './DataBase/index.js'
import productRoute from './Route/product.js'
import userRoute from './Route/User.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
connectDB()

app.use(userRoute)
app.use(productRoute)

app.listen(9000,() =>{
    console.log("App is Runing")
})