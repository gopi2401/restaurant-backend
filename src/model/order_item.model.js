const db = require("../config/db.config");

const getAllOrderItem = async () => {
  const [rows] = await db.query("SELECT * FROM order_items");
  return rows;
};

const getOrderItemById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM order_items WHERE order_id = ?",
    [id]
  );
  return rows[0];
};

const createOrderItem = async (orderItemData) => {
  const { order_id, menu_id, menu_name, menu_price, menu_quantity } =
    orderItemData;
  const [result] = await db.query(
    "INSERT INTO order_items (order_id, menu_id, menu_name, menu_price, menu_quantity) VALUES (?, ?, ?, ?, ?)",
    [order_id, menu_id, menu_name, menu_price, menu_quantity]
  );
  return result.insertId;
};

const updateOrderItem = async (id, orderItemData) => {
  const { order_id, menu_id, quantity } = orderItemData;
  const [result] = await db.query(
    "UPDATE order_items SET order_id = ?, menu_id = ?, quantity = ? WHERE order_id = ?",
    [order_id, menu_id, quantity]
  );
  return result.affectedRows;
};

const deleteOrderItem = async (id) => {
  const [result] = await db.query(
    "DELETE FROM order_items WHERE order_id = ?",
    [id]
  );
  return result.affectedRows;
};

module.exports = {
  getAllOrderItem,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
