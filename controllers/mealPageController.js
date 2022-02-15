const Service = require('../services')
const { createChecklist, checkoutPrice } =  require('./mealPageFunctions')

let meal_back = null
let checkoutList = null

const getInitContent = (res) => {
    console.log('-> controller: init');
    Service.FFServices.getInitContent(res)
}

const getMealsContent = (res) => {
    console.log('-> controller: meals content');
    meal_back = Service.FFServices.getMealsContent(res)
}

const getPlansContent = (res) => {
    console.log('-> controller: meal plans content');
    Service.FFServices.getPlansContent(res)
}

const getPayment = (data, res) => {
    console.log('-> controller: checkout calculate');
    const meal_back = Service.FFServices.getMealBack()
    checkoutList = createChecklist(meal_back, data)
    res.send({checkoutList, total: checkoutPrice(checkoutList),statusCode: 200})
}

const placeOrder = (res) => {
    Service.FFServices.makeOrder(checkoutList, res)
}

module.exports = {
    getInitContent,
    getMealsContent,
    getPlansContent,
    getPayment,
    placeOrder
}