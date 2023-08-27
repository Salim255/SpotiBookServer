const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.post("/login", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
//
router.get("/", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.get("/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.patch("/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.delete("/users:id", async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

module.exports = router;
