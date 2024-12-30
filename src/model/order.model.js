const db = require("../config/db.config");

const getAllOrder = async () => {
  const [rows] = await db.query("SELECT * FROM orders");
  return rows;
};

const getAllOrderAndItem = async () => {
  const [rows] = await db.query(`
    SELECT 
    o.*,
    JSON_ARRAYAGG(
         CASE 
            WHEN oi.id IS NOT NULL THEN JSON_OBJECT(
                'id', oi.id,
                'order_id', oi.order_id,
                'menu_id', oi.menu_id,
                'menu_name', oi.menu_name,
                'menu_price', oi.menu_price,
                'menu_quantity', oi.menu_quantity
            )
            ELSE NULL
        END
    ) AS order_items
FROM 
    orders o
LEFT JOIN 
    order_items oi 
ON 
    o.id = oi.order_id
GROUP BY 
    o.id;
`);
  return rows;
};

const getCount = async () => {
  const [rows] = await db.query("SELECT COUNT(id) AS orderCount FROM orders;");
  return rows[0];
};

const getQuantity = async () => {
  const [rows] = await db.query(
    "SELECT SUM(quantity) AS orderQuantity FROM orders;"
  );
  return rows[0];
};

const getPrice = async () => {
  const [rows] = await db.query("SELECT SUM(price) AS orderPrice FROM orders;");
  return rows[0];
};

const getOrderById = async (id) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE id = ?", [id]);
  return rows[0];
};

const createOrder = async (orderData) => {
  const { customer_name, quantity, price } = orderData;
  const [result] = await db.query(
    "INSERT INTO orders (customer_name, quantity, price) VALUES (?, ?, ?)",
    [customer_name, quantity, price]
  );
  return result.insertId;
};

const updateOrder = async (id, status) => {
  const updated_at = new Date();
  const [result] = await db.query(
    "UPDATE orders SET status = ?, updated_at = ? WHERE id = ?",
    [status, updated_at, id]
  );
  return result.affectedRows;
};

const deleteOrder = async (id) => {
  const [result] = await db.query("DELETE FROM orders WHERE id = ?", [id]);
  return result.affectedRows;
};

module.exports = {
  getAllOrder,
  getAllOrderAndItem,
  getCount,
  getQuantity,
  getPrice,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
