const mongoose = require("mongoose");

// Data scheme
const applicationScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "İsim olmadan başvuru yapılamaz."],
    trim: true,
  },
  school: {
    type: String,
    required: [true, "Okul bilgisi olmadan başvuru yapılamaz."],
  },
  email: {
    type: String,
    required: [true, "E-Posta olmadan başvuru yapılamaz."],
  },
  writing: {
    type: String,
    required: [true, "Tiyatro yazısı olmadan başvuru yapılamaz."],
    trim: true,
  },
  certificate: {
    type: String,
    required: [true, "Veli izni olmadan başvuru yapılamaz."],
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

const Application = mongoose.model("Application", applicationScheme);

module.exports = Application;
