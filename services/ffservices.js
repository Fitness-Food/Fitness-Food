const { CLOSING } = require("ws")
const client = require("../dbConnection")

let pageCollection = null
let mealsCollection = null
let plansCollection = null
let orderListCollection = null
let meal_back = null

const DB_NAME = "Fitness-food"
const PAGE_COLLECTION = "page_text"
const MEAL_COLLECTION = "meal_list"
const ORDER_LIST_COLLECTION = "order_list"
const ORDER_COLLECTION = "order_combination"

setTimeout(() => {
    pageCollection = client.mongoClient.db(DB_NAME).collection(PAGE_COLLECTION)
    mealsCollection = client.mongoClient.db(DB_NAME).collection(MEAL_COLLECTION)
    plansCollection = client.mongoClient.db(DB_NAME).collection(ORDER_COLLECTION)
    orderListCollection = client.mongoClient.db(DB_NAME).collection(ORDER_LIST_COLLECTION)
}, 200);

const getInitContent = (res) => {
    pageCollection.find().toArray((err, result) => {
        console.log('-> sending init content');
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

const getMealsContent = (res) => {
    mealsCollection.find().toArray((err, result) => {
        console.log("-> send meals content");
        if(err) {
            throw err
        }
        meal_back = result
        res.send({result, statusCode: 200})
    })
}

const getPlansContent = (res) => {
    plansCollection.find().toArray((err, result) => {
        console.log('-> send plans content');
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

const getMealBack = () => {
    return meal_back
}

const makeOrder = (data, res) => {
    orderListCollection.insertOne({data}, (err, result) => {
        console.log('-> new order req')
        res.sendStatus(204)
    })
}

module.exports = {
    getInitContent,
    getMealsContent,
    getPlansContent,
    getMealBack,
    makeOrder
}