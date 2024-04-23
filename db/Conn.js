import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://affaq020:Affaqkhan@cluster0.iyeg3db.mongodb.net/EMPLOYEE-TRANSFER");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

export default Connection