const express = require("express");
require("./config/db_config");
const userRoutes = require("./routes/user_routes");
const productRoute = require("./routes/product_route");

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(productRoute);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
