const express = require("express");
const router = express.Router();

const {
  createResource,
  getAllResource,
} = require("../controllers/ResourceController");

router.route("/").post(createResource).get(getAllResource);

module.exports = router;
