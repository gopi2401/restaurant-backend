const Expense = require("../model/expense.model");

const expenseCreate = async (req, res) => {
  try {
    const data = await Expense.createExpense(req.body);
    res.status(200).json({ message: "Expense created successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const expenseGetAll = async (req, res) => {
  try {
    let data = await Expense.getAllExpense();
    res.status(200).json({ message: "Expense get successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const expenseGetById = async (req, res) => {
  try {
    const data = await Expense.getExpenseById(req.params.id);
    res.status(200).json({ message: "Expense get successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const expenseUpdateById = async (req, res) => {
  try {
    const data = await Expense.updateExpense(req.params.id, req.body);
    if (data) {
      res.status(201).json({ message: "Expense updated successfully" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const expenseDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Expense.deleteExpense(id);
    res.status(200).json({ message: "Expense deleted successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

module.exports = {
  expenseCreate,
  expenseGetAll,
  expenseGetById,
  expenseUpdateById,
  expenseDeleteById,
};
