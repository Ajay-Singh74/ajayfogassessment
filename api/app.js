const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const productsRouter = require("./routes/products");

const app = express();

// allow any localhost port in dev
app.use(cors({
  origin: [/^http:\/\/localhost:\d+$/],   // 5173, 5174, etc.
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.options("*", cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productsRouter);

module.exports = app;
