var express = require("express");
var router = express.Router();

const {
  createList,
  getList,
  getAllList,
  updateList,
  removeList,
} = require("../controllers/list");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");



//actual routers goes here

//create routes
router.post(
  "/list/create/:userId",
  isSignedIn,
  isAuthenticated,
  createList
);

//read routes
router.get("/list/:listId", getList);
router.get("/list", getAllList);

//update routes
router.put(
  "/list/:listId/:userId",
  isSignedIn,
  isAuthenticated,
  updateList
);

//delete route
router.delete(
  "/list/:listId/:userId",
  isSignedIn,
  isAuthenticated,
  removeList
);

module.exports = router;
