const mongoose = require("mongoose");
const { Schema } = mongoose;
// const gmtDateTime = new Date().toUTCString();
// console.log(gmtDateTime);

const utcDate1 = new Date(Date.UTC(2022, 0, 14, 14, 30, 0));
// new Date("Fri Jan 20 2012 11:51:36 GMT-0500").toUTCString();
const schema = new Schema(
  {
    task: { type: String, require: true, trim: true },
    detail: { type: String, require: true, trim: true },
    isActive: { type: Boolean, require: true, trim: true },
    created: { type: Date, default: Date.now() },
  },
  {
    collection: "blogs",
  }
);

const model = mongoose.model("Blogs", schema);

module.exports = model;
