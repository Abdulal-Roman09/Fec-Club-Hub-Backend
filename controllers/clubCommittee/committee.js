import mongoose from "mongoose";
import Club from "../../models/Club.js";

// Add a committee member by MongoDB _id
export const addCommittee = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, role, email, phone } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "Invalid club _id" });
    }

    const updatedClub = await Club.findByIdAndUpdate(
      _id,
      { $push: { clubCommittee: { name, role, email, phone } } },
      { new: true }
    );

    if (!updatedClub) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.status(200).json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get committee members by MongoDB _id
// export const getCommittee = async (req, res) => {
//   try {
//     const { _id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(_id)) {
//       return res.status(400).json({ message: "Invalid club _id" });
//     }

//     const club = await Club.findById(_id, { clubCommittee: 1, _id: 0 });

//     if (!club) {
//       return res.status(404).json({ message: "Club not found" });
//     }

//     res.status(200).json(club.clubCommittee);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
