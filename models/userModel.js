const mongoose = require("mongoose");

// Data scheme
const userScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
  },
  school: {
    type: String,
    required: [true, "A user must have a school"],
    trim: true,
  },
  data: {
    type: String,
    required: [true, "There was a error. Error code: 500"],
  },
  certificate: {
    type: String,
    required: [true, "There was a error. Error code: 501"],
  },
});
