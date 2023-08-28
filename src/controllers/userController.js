const pool = require("../config/pool");
const bcrypt = require("bcryptjs");
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

exports.insert = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const { first_name, last_name, email, photo, password, passwordConfirm } =
      data;

    console.log("====================================");
    console.log(first_name, last_name, email, password, passwordConfirm);
    console.log("====================================");
    const rows = await pool.query(
      `INSERT INTO users (first_name, last_name, email, photo, password, passwordConfirm)
       VALUES 
          ($1, $2, $3, $4, $5) RETURNING *;`,
      [first_name, last_name, email, photo, password, passwordConfirm]
    );
    return rows?.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};
