const db = require("../config/db.config");

const getAllExpense = async () => {
  const [rows] = await db.query("SELECT * FROM expenses");
  return rows;
};

const getExpenseById = async (id) => {
  const [rows] = await db.query("SELECT * FROM expenses WHERE id = ?", [id]);
  return rows[0];
};

const createExpense = async (expenseData) => {
  const { name, price, pic_url, category } = expenseData;
  const [result] = await db.query(
    "INSERT INTO expenses (name, price, pic_url, category) VALUES (?, ?, ?, ?)",
    [name, price, pic_url, category]
  );
  return result.insertId;
};

const updateExpense = async (id, expenseData) => {
  const { name, price, pic_url, category } = expenseData;
  const updated_at = new Date();
  const [result] = await db.query(
    "UPDATE menus SET name = ?, price = ?, category = ?, pic_url = ?, updated_at = ? WHERE id = ?",
    [name, price, pic_url, category, updated_at, id]
  );
  return result.affectedRows;
};

const deleteExpense = async (id) => {
  const [result] = await db.query("DELETE FROM expenses WHERE id = ?", [id]);
  return result.affectedRows;
};

module.exports = {
  getAllExpense,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
};
