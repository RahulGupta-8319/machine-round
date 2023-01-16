const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema(
  {
    productId:ObjectId,
    totalprice:Number,
    totalquantity:Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
