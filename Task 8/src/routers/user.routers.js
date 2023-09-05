const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const user_c=require('../controllers/Users.control')

router.get("/users", auth,user_c.getall);
router.get("/users/:id", auth,user_c.getuser);
router.patch("/users/:id", auth, user_c.update);
router.delete("/users/:id", auth, user_c.del_user);

router.get("/profile", auth,user_c.profile);
router.delete("/logout", auth, user_c.logout) ;
router.delete("/logoutall", auth,user_c.logallout)
module.exports = router;
