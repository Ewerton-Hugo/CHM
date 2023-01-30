const router = require("express").Router()

const characterController = require("../controlers/characterControler")

router
    .route("/character")
    .post((req,res) => characterController.create(req,res))
router
    .route("/character")
    .get((req,res) => characterController.getAll(req,res))
router
    .route("/character/:name")
    .get((req,res) => characterController.getByName(req,res))
router
    .route("/character/:id")
    .delete((req,res) => characterController.delete(req,res))
router
    .route("/character/:id")
    .put((req,res) => characterController.update(req,res))

module.exports = router 