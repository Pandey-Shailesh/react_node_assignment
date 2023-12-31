const express = require("express");
const router = express.Router();

router.get("/signout", (req, res) => {
    res.send("Your Are SignOut !")
});

module.exports = router;