import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  profileImage: { type: String },
  role: {
    type: String,
    enum: ["Student", "ClubOrganizer", "CR", "Admin", "SuperAdmin"],
    default: "Student",
  },

  // Basic info
  phone: { type: String },
  homeTown: { type: String },
  hallName: { type: String },
  dob: { type: Date },

  // Academic info
  session: { type: String },
  year: { type: String },
  semester: { type: String },

  // Social links
  linkedin: { type: String },
  github: { type: String },
  facebook: { type: String },

  // System info
  createdAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date },
});

const User = mongoose.model("User", UserSchema);

export default User;
