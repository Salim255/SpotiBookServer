const express = require("express");
const router = express.Router();

router.post("/api/v1/users/signup", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.post("/api/v1/users/login", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
//
router.get("/api/v1/users", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.get("/api/v1/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.patch("/api/v1/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.delete("/api/v1/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

module.exports = router;
