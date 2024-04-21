const express = require('express')

const {supervisedPrediction} = require("../controllers/supervisedLearning")

const router = express.Router()

router.post("/supervisedPrediction", supervisedPrediction);


module.exports = router;