const express = require('express')
const router = express.Router()

const Controller = require("../controllers")

router.get("/init", (req, res) => {
    console.log('-> server recv home init req');
    Controller.homePage.getInitContent(res)
})

router.get("/mealInit", (req, res) => {
    console.log('-> server recv meal page init req');
    Controller.mealPage.getInitContent(res)
})

router.get("/getMeals", (req, res) => {
    console.log('-> server recv get meals req');
    Controller.mealPage.getMealsContent(res)
})

router.get("/getPlans", (req, res) => {
    console.log('-> server recv get plans req');
    Controller.mealPage.getPlansContent(res)
})

router.post("/checkout", (req, res) => {
    console.log('-> server recv checkout req');
    Controller.mealPage.getPayment(req.body, res)
})

router.get("/placeOrder", (req, res) => {
    console.log('-> server recv place order req')
    Controller.mealPage.placeOrder(res)
})

module.exports = router