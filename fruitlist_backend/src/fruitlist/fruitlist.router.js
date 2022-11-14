const { read, insert, del, edit } = require("./fruitlist.controller");

const express = require("express");
const router = express.Router();
router.route("/display").get(read);
router.route("/insert").post(insert);
router.route("/delete").delete(del);
router.route("/edit").put(edit);
module.exports = router;
