const express = require('express')
const router = express.Router()

const Controller = require("../controllers")

router.get ("/init", (req, res) => {
    console.log('-> server recv home init req');
    Controller.homePage.getInitContent(res)
})

router.get ("/mealInit", (req, res) => {
    console.log('-> server recv meal page init req');
    Controller.mealPage.getInitContent(res)
})


module.exports = router