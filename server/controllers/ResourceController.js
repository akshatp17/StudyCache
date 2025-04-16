const resourceModel = require("../models/ResourceModel");

const createResource = async (req, res) => {
  try {
    const resource = new resourceModel({ ...req.body, status: "pending" });
    await resource.save();
    return res.status(201).send({
      success: true,
      message: "Request created successfully",
      resource,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create requests" });
  }
};

const getAllResource = async (req, res) => {
  try {
    const resource = await resourceModel.find({});
    if (!resource || resource.length === 0) {
      return res.status(404).json({ message: "No resources found" });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
};

module.exports = {
  createResource,
  getAllResource,
};
