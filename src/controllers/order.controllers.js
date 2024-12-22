const Order = require("../model/order.model");
const Order_items = require("../model/order_item.model");

const orderCreate = async (req, res) => {
  try {
    const { customer_name, menus, price } = req.body;
    var total_quantity = menus.reduce((acc, crr) => acc + crr.menu_quantity, 0);
    var total_price = menus.reduce(
      (acc, crr) => acc + crr.menu_price * crr.menu_quantity,
      0
    );
    if (price != total_price) {
      res.status(500).json({ message: "Price does not match!" });
    }
    const data = await Order.createOrder({
      customer_name,
      quantity: total_quantity,
      price: total_price,
    });
    menus.map(async (item) => {
      if (item.menu_id)
        await Order_items.createOrderItem({ order_id: data, ...item });
    });
    res.status(200).json({ message: "Order created successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const orderGetAll = async (req, res) => {
  try {
    let orders = await Order.getAllOrder();
    res.status(200).json({ message: "Order get successfully", data: orders });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const orderAndItemsGetAll = async (req, res) => {
  try {
    let orders = await Order.getAllOrderAndItem();
    res.status(200).json({ message: "Order get successfully", data: orders });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const orderGetById = async (req, res) => {
  try {
    const data = await Order.getOrderById(req.params.id);
    res.status(200).json({ message: "Order get successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const orderUpdateById = async (req, res) => {
  try {
    const { status } = req.body;
    const data = await Order.updateOrder(req.params.id, status);
    if (data) {
      res.status(201).json({ message: "Order updated successfully" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

const orderDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Order.deleteOrder(id);
    res.status(200).json({ message: "Order deleted successfully", data });
  } catch (e) {
    res.status(500).json({ message: "internal server error" + e.message });
  }
};

module.exports = {
  orderCreate,
  orderGetAll,
  orderAndItemsGetAll,
  orderGetById,
  orderUpdateById,
  orderDeleteById,
};
