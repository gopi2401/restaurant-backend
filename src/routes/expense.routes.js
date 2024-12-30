const express = require("express");
const expenseController = require("../controllers/expense.controllers");
const expense = express.Router();

expense.get("/expense", expenseController.expenseGetAll);
expense.get("/expense/:id", expenseController.expenseGetById);
expense.post("/expense", expenseController.expenseCreate);
expense.put("/expense/:id", expenseController.expenseUpdateById);
expense.delete("/expense/:id", expenseController.expenseDeleteById);

module.exports = expense;
