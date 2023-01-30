const router = require("express").Router();

//character router
const characterRouter = require("./router")

router.use("/",characterRouter);

module.exports = router;