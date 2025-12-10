const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/booksDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
