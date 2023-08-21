const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const volunteerSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  job_title: { type: String, required: true },
  areas_of_exp: { type: [String] },
  bio: String,
  pic: String,
  status: { Boolean, default: false },
});

volunteerSchema.pre("save", function (next) {
  let volunteer = this;
  if (!volunteer.isModified("password")) return next();
  bcrypt
    .hash(volunteer.password, 10)
    .then((hash) => {
      volunteer.password = hash;
      next();
    })
    .catch((err) => next(error));
});

volunteerSchema.methods.comparePassword = function (inputPassword) {
  let volunteer = this;
  return bcrypt.compare(inputPassword, volunteer.password);
};

//collection name is stories in the database
module.exports = mongoose.model("Volunteer", volunteerSchema);
