exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};
exports.getUserById = (req, res) => {
  console.log("====================================");
  console.log("Hello world", req.params);
  console.log("====================================");
  res.status(200).json({
    status: "success",
    data: "data",
  });
};
exports.updateUserById = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};
exports.deleteUserById = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};
