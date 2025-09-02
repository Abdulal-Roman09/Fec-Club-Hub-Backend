import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema({
  clubId: { type: String, required: true, unique: true },
  clubName: { type: String, required: true, unique: true },
  clubSortName: { type: String, required: true },
  clubMotto: { type: String, required: true },
  clubDescription: { type: String, required: true },
  clubLogo: { type: String, required: true },
  clubBanner: { type: String, required: true },
  clubCategory: {
    type: String,
    required: true,
    enum: [
      "Innovation",
      "Technology",
      "Arts",
      "Religious",
      "Community",
      "Sports",
      "Creative",
      "Academic",
      "Cultural",
      "Professional",
      "Education",
    ],
  },
}, { timestamps: true });

export default mongoose.model("Club", ClubSchema);
