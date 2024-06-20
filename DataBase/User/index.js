import mongoose from "mongoose";
import jwt from 'jsonwebtoken'


const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

const userModel = mongoose.model('user', user);


export const userRagistor = (req, res) => {
    const data = req.body
    const saveUser = new userModel(data)
    saveUser.save()
    res.send({
        message: "user Ragistor success",
        data: data
    })
}

export const userLogin = (req, res) => {
    const data = req.body
    userModel.findOne({ email: data.email }).then((data) => {
        if (data) {
            const jwtToken = jwt.sign({ email: data.email }, 'shhhhh')
            res.send({
                status: true,
                message: "user Ragistor success",
                data: data,
                token: jwtToken
            })
        } else {
            res.send({
                status: false,
                message: 'user not found'
            })
        }
    })
}

export const forgotPassword = (req, res) => {
    const data = req.body
    userModel.findOneAndUpdate({ email: data.email }, { password: data.password }, { new: true })
        .then(user => {
            if (user) {
                res.send({
                    status: true,
                    message: "Forogt Password success",
                    data: user
                })
            } else {
                res.send({
                    status: false,
                    message: "User not found",
                })
            }
        })
        .catch(error => {
            console.error('Error updating user:', error);
        });
}