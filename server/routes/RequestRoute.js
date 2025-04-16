const express = require("express");
const router = express.Router();

const {
  createRequest,
  getAllRequests,
} = require("../controllers/RequestController");

router.route("/").get(getAllRequests).post(createRequest);

module.exports = router;
