module.exports = (server) => {
  const admin = require("./admin.routes");
  const user = require("./user.routes");
  const order = require("./order.routes");
  const menu = require("./menu.routes");
  const expense = require("./expense.routes");

  server.use("/v1/admin", admin);
  server.use("/v1", user);
  server.use("/v1", order);
  server.use("/v1", menu);
  server.use("/v1", expense);
};
