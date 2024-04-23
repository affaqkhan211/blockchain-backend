import mongoose from "mongoose";


const deoSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const DEO = mongoose.model('DEO', deoSchema);

export default DEO
