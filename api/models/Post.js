const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: false,
    },
    collaborator: {
      type: String,
      required: false,
    },
    categories: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    pdf: {
      type: String,
      required: false,
    },
    userPhone: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
