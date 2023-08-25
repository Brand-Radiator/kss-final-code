const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  SL_NO: {
    type: String,
    required: true,
  },
  attendance: {
    type: Boolean,
    default: false,
  },

  LiveImageURL: {
    type: string,
  },
  Timestamp: {
    type: Timestamp,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  adharNo: {
    type: Number,
    required: true,
  },
  sportsDiscipline: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  applyingAs: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  levelOfParticipation: {
    type: String,
    required: true,
  },
  highestParticipation: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  certificate: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  kss: {
    type: String,
    required: true,
  },
  kss11: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("selectedCandidate", userSchema);

module.exports = User;
