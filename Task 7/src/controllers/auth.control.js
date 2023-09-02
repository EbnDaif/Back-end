const User = require("../models/user.models");

const reg = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
const login = async (req, res) => {
  try {

    const user = await User.findbycredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generatetokens();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = {
  reg: reg,
  login: login,
};
