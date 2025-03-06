import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected: ${connect.connection.host}`);
    }catch(error){
        console.log("Server error: ", error.message);
        process.exit(1); //process code: 1 significa salir con un error y 0 todo Ok 
    }
}