const express = require("express");
const router = express.Router();

router.get("/api/v1/libraries", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.get("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.post("/api/v1/libraries", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.put("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

router.patch("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.delete("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

module.exports = router;
