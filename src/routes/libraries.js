const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");

router.get("/api/v1/libraries/:id", libraryController.getLibraryById);
router.post("/api/v1/libraries", libraryController.addLibrary);
router.put("/api/v1/libraries/:id", libraryController.updateLibraryById);

router.patch("/api/v1/libraries/:id", libraryController.updateLibraryById);
router.delete("/api/v1/libraries/:id", libraryController.deleteLibraryById);

module.exports = router;
