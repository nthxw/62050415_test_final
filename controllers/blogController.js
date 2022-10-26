const Blog = require("../models/blog");

exports.index = async (req, res, next) => {
  const blog = await Blog.find();

  res.status(200).json({
    messages: "Successfuly loeded",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { task, detail } = req.body;
  const { isActive } = req.body;
  const blog = new Blog({
    task: task,
    detail: detail,
    isActive: isActive,
  });

  await blog.save();
  res.status(201).json({
    messages: "Successfuly added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);
  res.status(200).json({
    messages: "Successfuly remove",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { task, detail } = req.body;
  const { isActive } = req.body;
  await Blog.findByIdAndUpdate(id, {
    task: task,
    detail: detail,
    isActive: isActive,
  });
  res.status(200).json({
    messages: "Successfuly update",
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id });

  res.status(200).json({
    messages: "Successfuly get blog",
    data: blog,
  });
};
