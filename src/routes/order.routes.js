const express = require("express");
const orderController = require("../controllers/order.controllers");
const order = express.Router();

order.get("/order", orderController.orderGetAll);
order.get("/orderanditems", orderController.orderAndItemsGetAll);
order.get("/ordercount", orderController.orderCount);
order.get("/orderquantity", orderController.orderQuantity);
order.get("/orderprice", orderController.orderPrice);
order.get("/order/:id", orderController.orderGetById);
order.post("/order", orderController.orderCreate);
order.put("/order/:id", orderController.orderUpdateById);
order.delete("/order/:id", orderController.orderDeleteById);

module.exports = order;
