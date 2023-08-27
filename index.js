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

//To upload .env to process variables environment

//Express it's a function that will add a lot of methods to our app variable

//Route handlers
/* app.post("/api/v1/users/signup", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.post("/api/v1/users/login", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
//
app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.get("/api/v1/users:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.patch("/api/v1/users:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.delete("/api/v1/users:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
}); */
//

/* app.get("/api/v1/libraries", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.get("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.post("/api/v1/libraries", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.put("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});

app.patch("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.delete("/api/v1/libraries/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
}); */

//
/* app.put("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.delete("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
});
app.get("/api/v1/libraries/:id/books/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
}); */
//
