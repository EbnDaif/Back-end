const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "");

    const decode = jwt.verify(token, "shenesha");

    console.log(decode);
    const user = await User.findOne({ id: decode.id, tokens: token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: "not authorize to access" });
  }
};
module.exports = auth;
