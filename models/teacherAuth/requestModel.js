// models/TransferRequest.js

import mongoose from "mongoose";

const transferRequestSchema = new mongoose.Schema({
  fullName: {
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
  cnic: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending' // You can set other statuses like 'Approved', 'Rejected', etc.
  }
}, { timestamps: true });

const TransferRequest = mongoose.model('TransferRequest', transferRequestSchema);

export default TransferRequest
