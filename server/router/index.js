const controller = require("../controller");
const router = require("express").Router();
///
router.get("/", function (req, res) {
  res.send("../assets/test.jpeg");
});
////
router.post("/api/login", controller.initLogin);
router.post("/api/register", controller.initRegister);

////
module.exports = router;
