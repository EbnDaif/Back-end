const express = require("express");
const uservalidation=require('../middleware/Uservalidationmiddleware')
const router = express.Router();
const auth_c=require('../controllers/auth.control')
router.post("/register",uservalidation, auth_c.reg,);
router.post("/login", auth_c.login);
module.exports = router;
