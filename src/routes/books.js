const express = require("express");
const router = express.Router();

//
router.post("/api/v1/libraries/:id/books", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

router.put("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.delete("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
router.get("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
module.exports = router;
