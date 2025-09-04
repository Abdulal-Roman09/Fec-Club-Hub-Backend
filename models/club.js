import mongoose from "mongoose";
const clubCommitteeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { _id: false }
);



const ClubSchema = new mongoose.Schema(
  {
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
    clubCommittee: { type: [clubCommitteeSchema], default: [] },
    clubAchivements: [],
    ClubEvents: { type: [ClubEventsSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Club", ClubSchema);
