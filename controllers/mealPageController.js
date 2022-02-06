const Service = require('../services')
const { createChecklist } =  require('./mealPageFunctions')

let meal_back = null

const getInitContent = (res) => {
    console.log('-> controller: init');
    Service.FFServices.getInitContent(res)
}

const getMealsContent = (res) => {
    console.log('-> controller: meals content');
    meal_back = Service.FFServices.getMealsContent(res)
    console.log('--> controller: meal back is ', meal_back);
}

const getPlansContent = (res) => {
    console.log('-> controller: meal plans content');
    Service.FFServices.getPlansContent(res)
}

const getPayment = (data, res) => {
    console.log('-> controller: checkout calculate');
    const meal_back = Service.FFServices.getMealBack()
    let checkoutList = createChecklist(meal_back, data)
    res.send({checkoutList, statusCode: 200})
}

module.exports = {
    getInitContent,
    getMealsContent,
    getPlansContent,
    getPayment
}