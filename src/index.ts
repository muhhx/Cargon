const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const corsOptions = require("./utils/corsConfig");
const routes = require("./routes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));

const start = async () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
  });
  routes(app);
};
start();
