const express = require("express");
const userRouter = require("./routes/users");
module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use("/api/v1/users", userRouter);
  return app;
};
