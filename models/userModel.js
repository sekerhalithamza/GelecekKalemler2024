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
  phone: {
    type: String,
    required: [true, "A user must have a phone number"],
  },
  school: {
    type: String,
    required: [true, "A user must have a school"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
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
