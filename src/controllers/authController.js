const pool = require("../config/pool");
const userController = require("./userController");
const qrcode = require("qrcode");
const bcrypt = require("bcryptjs");

const Qrcode = (userData) => {
  let qr;
  qrcode.toString(userData, (err, code) => {
    qr = code;
  });

  return qr;
};
exports.signUp = async (req, res) => {
  const { first_name, last_name, email, password, passwordConfirm, photo } =
    req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await pool.query(`SELECT * FROM users  WHERE email = $1;`, [
      email,
    ]);
    const qrcode = Qrcode("Salim");

    if (user.rows[0]) {
      res.status(404).json({
        status: "fail",
        message:
          "duplicate key value violates unique constraint users_email_key",
      });
      return;
    }

    const rows = await pool.query(
      `INSERT INTO users (first_name, last_name, email, photo, password, passwordConfirm)
       VALUES 
          ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [first_name, last_name, email, photo, hashedPassword, "undefined"]
    );

    res.status(200).json({
      status: "success",
      data: rows?.rows[0],
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.logIn = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};
