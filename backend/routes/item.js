var express = require("express");
var router = express.Router();

const {

  createItem,
  getItem,
  deleteItem,
  updateItem,
  getAllItems

} = require("../controllers/item");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

//all of actual routes
//ceate route
router.post(
  "/item/create/:userId",
  isSignedIn,
  isAuthenticated,
  createItem
);

//read route
router.get("/item/:itemId", getItem);

//delete route
router.delete(
  "/item/:itemId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteItem
);
//update route
router.put(
  "/item/:itemId/:userId",
  isSignedIn,
  isAuthenticated,
  updateItem
);
//listing route
router.get("/items",   getAllItems);

module.exports = router;
