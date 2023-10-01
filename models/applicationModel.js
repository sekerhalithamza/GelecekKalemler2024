const mongoose = require("mongoose");

// Data scheme
const applicationScheme = new mongoose.Schema({
  writing: {
    type: String,
    required: [true, "A application must have a writing"],
    trim: true,
  },
  certificate: {
    type: String,
    required: [true, "A application must have a certificate"],
    trim: true,
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

const application = mongoose.model("Application", applicationScheme);

module.exports = application;
