import Club from "../../../models/Club.js";

export const addEvent = async (req, res) => {
  try {
    const { _id } = req.params;
    const eventData = req.body;
    const club = await Club.findById(_id);

    if (!club) {
      return res.status(404).json({
        message: "Clube is not Found",
      });
    }

    if (!club.ClubEvents) {
      club.ClubEvents = [];
    }

    club.ClubEvents.push(eventData);
    await club.save();
    return res.status(201).json({ message: "Events is add " });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const { _id } = req.params;
    const club = await Club.findById(_id);

    if (!club) {
      return res.status({ message: "Club is not found" });
    }
    return res.status(200).json({ ClubEvents: club.ClubEvents });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEventsbyEvnetName = async (req, res) => {
  try {
    const { _id, eventName } = req.params;
    const club = await Club.findById(_id);
    if (!club) {
      return res.status({ message: "Clube is not found" });
    }
    const event = club.ClubEvents.find(
      (e) => e.eventName.toLowerCase() === eventName.toLowerCase()
    );
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(201).json({ event });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
