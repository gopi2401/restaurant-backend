const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
const PORT = 3000;

require("./src/config/db.config.js");
require("./src/middleware/middleware.js")(server);
require("./src/routes/routes.js")(server);

server.listen(PORT, () => {
  console.log(`server running port http://localhost:${PORT}/`);
});
