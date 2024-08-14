const mongoose = require("mongoose");
const dbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const dbTable = mongoose.model("DisplayUserData", dbSchema);
module.exports = dbTable;
