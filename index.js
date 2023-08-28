const express = require("express");
const app = require("./src/app.js");
const config = require("./src/config/app");
const dbConfig = require("./src/config/db");
const pool = require("./src/config/pool");
const port = config.appPort || 3000;
pool
  .connect({
    host: dbConfig.dbHost,
    port: dbConfig.dbPort,
    database: dbConfig.dbDatabase,
    user: dbConfig.dbUser,
    password: "",
  })
  .then(() => {
    app().listen(port, () => {
      console.log(`Server running on port ${port} ...`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
