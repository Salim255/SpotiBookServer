const express = require("express");
const userRouter = require("./routes/users");
const libraryRouter = require("./routes/libraries");
const bookRouter = require("./routes/books");
module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/libraries", libraryRouter);
  app.use("/api/v1/libraries/:id/books", bookRouter);
  return app;
};
