import express, { response } from 'express'
import { DeleteProduct, addModel, getProduct, updateProduct } from '../DataBase/product/index.js'

const productRoute = express.Router()

productRoute.post('/product/add',(req,res) => {
    addModel(req,res)
})

productRoute.get('/product/get',(req,res) =>{{
    getProduct(req,res)
}})

productRoute.patch('/product/update',(req,res) =>{{
    updateProduct(req,res)
}})


productRoute.delete('/product/delete',(req,res) =>{{
    DeleteProduct(req,res)
}})


export default productRoute