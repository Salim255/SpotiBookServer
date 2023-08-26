const express = require("express");

//Express it's a function that will add a lot of methodes to our app variable
const app = express();
app.use(express.json());

//Route handlers

app.post("/api/v1/users/signup", (req, res) => {
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
});
//

app.get("/api/v1/libraries", (req, res) => {
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
});

//
app.put("/api/v1/libraries/:id/books/:id", (req, res) => {
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
});
//
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port} ...`);
});
