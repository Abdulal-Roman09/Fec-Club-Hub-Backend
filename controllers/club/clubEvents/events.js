import Club from "../../../models/Club.js";

export const addEvent = async (req, res) => {
  try {
    const { _id } = req.params;
    const eventData = req.body;

    if (!eventData.eventName) {
      return res.status(400).json({ message: "Event name is required" });
    }

    const club = await Club.findById(_id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    club.ClubEvents = club.ClubEvents || [];
    club.ClubEvents.push(eventData);

    await club.save();

    return res
      .status(201)
      .json({ message: "Event added successfully", event: eventData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
