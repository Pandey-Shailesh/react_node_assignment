const Items = require("../models/items");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const list = require("../models/lists");


exports.createItem = (req, res) => {
    //destructurethe fields
    const { name, list, check } = fields;

    if (!name || !list || check) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }
    let items = new Items(fields);
    // console.log(product);
    //save to the DB
    items.save((err, items) => {
      if (err) {
        return res.status(400).json({
          error: "Saving items in Db failed",
        });
      }
      res.json(items);
    });
  };

exports.getItem = (req, res) => {
return res.json(req.items);
};


//delete controllers
exports.deleteItem = (req, res) => {
  let items = req.items;
  items.remove((err, deletedItems) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the items",
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedItems,
    });
  });
};
//updatecontrollers
exports.updateItem = (req, res) => {
    //updation code
    let items = req.items;
    items = _.extend(items, fields);

    //save to the DB
    items.save((err, items) => {
      if (err) {
        return res.status(400).json({
          error: "updation of items in Db failed",
        });
      }
      res.json(items);
    });
  };


//product listing
exports.getAllItems = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  Items.find()
    .select("name")
    .populate("list")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, items) => {
      if (err) {
        return res.status(400).json({
          error: "No items Found",
        });
      }
      res.json(items);
    });
};

exports.getAllUniqueList = (req, res) => {
  Items.distinct("list", {}, (err, list) => {
    if (err) {
      return res.status(400).json({
        error: "No list found",
      });
    }
    res.json(list);
  });
};

