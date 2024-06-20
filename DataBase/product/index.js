import mongoose from "mongoose";


const product = new mongoose.Schema({
    name: String,
    image: String,
    matrial: String,
    Brand: String,
    color: String,
    description: String,
    MRP: Number,
    sellingPrice: Number,
    descount: Number,
    platForm: String,
})

const productModel = mongoose.model('Product', product);

export const addModel = (req, res) => {
    const data = req.body
    const discountPercentage = ((data.MRP - data.sellingPrice) / data.MRP) * 100;
    const addData = {
        ...data,
        descount:discountPercentage
    }
    const saveProduct = new productModel(addData)
    saveProduct.save()
    res.send({
        message: "date added success",
        data: data
    })
}

export const getProduct = (req, res) => {
    productModel.find().then((data) => {
        res.send({
            message: 'Data get Successfull',
            data: data
        })
    })
}


export const updateProduct = (req, res) => {
    const updateDataId = req.body.id
    const newData = {
        ...req.body
    }

    const discountPercentage = ((newData.MRP - newData.sellingPrice) / newData.MRP) * 100;
    const addData = {
        ...newData,
        descount:discountPercentage
    }

    delete addData.id
    productModel.findByIdAndUpdate(updateDataId, { ...addData }, { new: true }).then((data) => {
        res.send({
            message: 'Data get Successfull',
            data: data
        })
    })
}

export const DeleteProduct = (req, res) => {
    const updateDataId = req.body.id
    productModel.findByIdAndDelete(updateDataId).then((data) => {
        res.send({
            message: 'Data Delete Successfull',
            data: data
        })
    })
}
