const express = require('express')
const router = express.Router()

const Controller = require("../controllers")

router.get ("/init", (req, res) => {
    console.log('-> server recv init req');
    Controller.page.getInitContent(res)
})

module.exports = router