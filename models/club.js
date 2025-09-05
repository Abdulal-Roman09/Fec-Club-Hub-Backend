import mongoose from "mongoose";

// Committee Sub-Schema
const clubCommitteeSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { _id: false }
);

// Events Sub-Schema
const ClubEventsSchema = new mongoose.Schema({
  eventName: { type: String },
  eventBanner: { type: String },
  eventDescription: { type: String },
  eventDate: { type: String },
  eventTime: { type: String },
  eventDeadline: { type: String },
  eventLocation: { type: String },
  eventSpeaker: { type: String },
  eventOrganizer: { type: String },
  eventRegister: { type: String },
  eventRegisterDeadline: { type: String },
});

// Main Club Schema
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
    clubAchivements: { type: Array, default: [] },
    ClubEvents: { type: [ClubEventsSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Club", ClubSchema);
