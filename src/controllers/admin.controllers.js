const User = require("../model/user.model");
const bcryptjs = require("bcryptjs");

const userCreate = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const data = await User.createUser({ phone, password: hashedPassword });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const userGetAll = async (req, res) => {
  try {
    let users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const userGetById = async (req, res) => {
  try {
    const data = await User.getUserById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const userUpdateById = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const data = await User.updateUser(req.params.id, {
      phone,
      password: hashedPassword,
    });
    if (data) {
      res.status(201).json({ message: "updated successfully" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const userDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.deleteUser(id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

module.exports = {
  userCreate,
  userGetById,
  userGetAll,
  userUpdateById,
  userDeleteById,
};
