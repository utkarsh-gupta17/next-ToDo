// user model data
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required!"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"]
  },
  about: String,
  profileURL: String,
},
  { timestamps: true }
);

export const User = mongoose.models.users || mongoose.model("users", userSchema);