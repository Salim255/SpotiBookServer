const pool = require("../config/pool");
const userController = require("./userController");
const sendEmail = require("../utils/email");
const qrcode = require("qrcode");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, "salim", { expiresIn: "90d" });
};

const Qrcode = (userData) => {
  let jsonData = JSON.stringify(userData);
  let qr;
  qrcode.toString(jsonData, (err, code) => {
    qr = code;
    console.log(qr);
  });

  return qr;
};
exports.signUp = async (req, res) => {
  try {
    console.log("====================================");
    console.log(req.body, "Hello World");
    console.log("====================================");
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await pool.query(`SELECT * FROM users  WHERE email = $1;`, [
      email,
    ]);
    console.log("====================================");
    console.log("usersss", user);
    console.log("====================================");
    if (user.rows[0]) {
      res.status(404).json({
        status: "fail",
        message:
          "duplicate key value violates unique constraint users_email_key",
      });
    }

    const { rows } = await pool.query(
      `INSERT INTO users ( email, password, passwordConfirm)
       VALUES 
          ($1, $2, $3) RETURNING *;`,
      [email, hashedPassword, "undefined"]
    );

    console.log("====================================");
    console.log(rows, "rows");
    console.log("====================================");

    const token = signToken(rows[0].id);
    const qrcode = Qrcode({ token: token, id: rows[0].id });
    //Email handler ...
    sendEmail({ email: email, qrcode: qrcode });
    console.log("====================================");
    console.log(token, rows[0]);
    console.log("====================================");

    res.status(200).json({
      status: "success",
      data: {
        token: token,
        data: rows[0],
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { userId } = req.body;
    const { rows } = await pool.query(`SELECT * FROM users  WHERE id = $1;`, [
      userId,
    ]);
    if (rows) {
      const token = signToken(rows[0].id);

      res.status(200).json({
        status: "success",

        data: {
          token: token,
          data: rows[0],
        },
      });
    }
    res.status(404).json({
      status: "success",
      message: "User not exist",
    });
  } catch (error) {}
};
