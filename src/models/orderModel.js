const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema(
  {
    productId:ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
