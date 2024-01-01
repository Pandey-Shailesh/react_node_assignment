const Category = require("../models/lists");

exports.getListById = (req, res, next, id) => {
  List.findById(id).exec((err, list) => {
    if (err) {
      return res.status(400).json({
        error: "List not found in DB",
      });
    }
    req.list = list;
    next();
  });
};
exports.createList = (req, res) => {
  const list = new List(req.body);
  list.save((err, list) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save list in DB",
      });
    }
    res.json({ list });
  });
};
exports.getList = (req, res) => {
  return res.json(req.list);
};
exports.getAllList = (req, res) => {
  List.find().exec((err, list) => {
    if (err) {
      return res.status(400).json({
        error: "No list are found",
      });
    }
    res.json(list);
  });
};

exports.updateList = (req, res) => {
  const list = req.list;
  list.name = req.body.name;

  list.save((err, updatedList) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update the List",
      });
    }
    res.json(updatedList);
  });
};
exports.removelist = (req, res) => {
  const list = req.list;

  list.remove((err, list) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this list",
      });
    }
    res.json({
      message: "Successfully deleted",
    });
  });
};
