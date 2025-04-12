const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/stashcart")
  .then(() => {
    console.log("DB successfully connected");
  })
  .catch((e) => {
    console.error(e);
  });
