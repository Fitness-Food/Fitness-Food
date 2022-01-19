const client = require("../dbConnection")

let pageCollection = null

const DB_NAME = "Fitness-food"
const MEAL_COLLECTION = "meal_list"

setTimeout(() => {
    pageCollection = client.mongoClient.db(DB_NAME).collection(MEAL_COLLECTION)
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

module.exports = {
    getInitContent
}