const requestModel = require("../models/RequestModel");

const createRequest = async (req, res) => {
  try {
    const request = new requestModel({ ...req.body, status: "pending" });
    await request.save();
    return res.status(201).send({
      success: true,
      message: "Request created successfully",
      request,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create requests" });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const request = await requestModel.find({});
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
};

module.exports = {
  createRequest,
  getAllRequests,
};
