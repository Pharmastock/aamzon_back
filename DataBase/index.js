import mongoose from "mongoose";


export const connectDB = () =>{
    mongoose.connect('mongodb+srv://amazon:y$-6XBNmEUGt9yf@cluster0.g5dbeki.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((res) =>{
        console.log("Database Connect Successfull")
    })
}

