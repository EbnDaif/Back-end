const User = require("../models/user.models");

const allusersdata = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch((e) => res.status(500).send(e));
};
const search_user_by_id = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send("cannot find this user");
      }
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
}
const updateuser = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const updates = Object.keys(req.body);

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("unable to find user");
    }
    updates.forEach((ele) => (user[ele] = req.body[ele]));
    await user.save();

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteuser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  try {
    if (!user) {
      res.status(404).send("cannot find user");
    }
    res.status(200).send(`${user} is deleted `);
  } catch (error) {
    res.status(400).send(error);
  }
};

const profile = async (req, res) => {
  res.status(200).send(res.user);
};
const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((e) => {
      return e !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
};
const logallout=async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
};
module.exports = {
  getall: allusersdata
  , getuser: search_user_by_id,
  update:updateuser,
  del_user: deleteuser,
  profile: profile,
  logout: logout,
  logallout:logallout,
}