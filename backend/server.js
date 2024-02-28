import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
dotenv.config(); 


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

// app.use("/auth", authRouter);
// app.use("/categories", categoryRoute);
// app.use("/order", orderRouter);
// app.use("/product", productRouter);
// app.use("/users", userRouter);
// app.use("/cupon", cuponRouter);


//Error handler
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMsg = err.message || "Something went wrong";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: err.stack,

    });
})

app.listen(8800, ()=> {
    connect();
    console.log("Connected to backend")
})