import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    schoolName: {
      type: String,
      required: true
    },
    experience: {
      type: Number,
      required: true
    },
    city: {
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
    },
    cnic: {
      type: String,
      required: true,
      unique: true
    }
  });

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher
