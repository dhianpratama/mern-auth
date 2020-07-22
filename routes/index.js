const express = require("express");
const router = express.Router();

const { loginHandler, registerHandler } = require("../controllers/user-controller");

router.post("/users/register", registerHandler);
router.post("/users/login", loginHandler);

module.exports = router;
