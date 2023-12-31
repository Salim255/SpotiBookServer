const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const libraryRouter = require("./routes/libraries");
const bookRouter = require("./routes/books");
const options = {
  origin: "*",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(cors(options));
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/libraries", libraryRouter);
  app.use("/api/v1/libraries/:id/books", bookRouter);
  return app;
};
