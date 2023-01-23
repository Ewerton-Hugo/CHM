const router = require("express").Router();

//character router
const characterRouter = require("./services")

router.use("/",characterRouter);

module.exports = router;