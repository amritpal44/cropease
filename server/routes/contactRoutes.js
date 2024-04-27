const express = require("express")

const router = express.Router()

const {contactUsController} = require('../controllers/contactUsController')


router.post("/contact-us", contactUsController)


module.exports = router