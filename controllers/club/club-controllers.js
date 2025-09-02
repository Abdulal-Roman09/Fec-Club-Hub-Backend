import Club from "../../models/Club.js";

export const createClue = async (req, res) => {
  try {
    const allInformation = req.body;
    const existingClub = await Club.findOne({
      $or: [
        { clubId: allInformation.clubId },
        { clubName: allInformation.clubName },
      ],
    });

    if (existingClub) {
      return res.status(400).json({
        message: "Club with this ID or Name already exists",
      });
    }
    const club = new Club(allInformation);
    const savedClue = await club.save();

    res.status(201).json({
      message: "Clue created successfully",
      data: savedClue,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllClub = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json({
      message: "All clubs fetched successfully",
      data: clubs,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getSingleClubById = async (req, res) => {
  try {
    const { id } = req.params;
    const club = await Club.findById(id);
    if (!club) {
      return res.status(404).json({
        message: "Club is not found",
      });
    }
    res.status(200).json({
      message: "Club fetched successfully",
      data: club,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
