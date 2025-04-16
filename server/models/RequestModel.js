const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Notes", "QB", "QB Solution"],
      required: true,
    },
    semester: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      required: true,
    },
    course: {
      type: String,
      enum: ["CSE Core", "ISE", "CS(CY)", "CS(BS)", "CSD", "CS(DS)", "CS(IOT)"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "rejected", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
