const e = require("express");
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
    unique: true,
  },
  certificate: {
    type: String,
    required: [true, "There was a error. Error code: 501"],
    unique: true,
  },
});

/* SAMPLE DATA

{
  "name": "Test",
  "email": "test@gmail.com",
  "school": "SAKIP SABANCI ANADOLU LİSESİ",
  "data": "testpdf",
  "certificate":"testcertificate"
}

*/

const User = mongoose.model("User", userScheme);

module.exports = User;
