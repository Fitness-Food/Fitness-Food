let expect = require("chai").expect
let request = require("request")

let url_init = "http://localhost:3030/api/init"
let url_meal_init = "http://localhost:3030/api/mealInit"
let url_get_meals = "http://localhost:3030/api/getMeals"
let url_get_plans = "http://localhost:3030/api/getPlans"
let url_place_Order = "http://localhost:3030/api/placeOrder"

describe("Test: init", () => {
    it("check if init api works", (done) => {
        request(url_init, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    //
    it("check statusCode key in body(200)", (done) => {
        request(url_init, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200)
            done()
        })
    })
})

describe("Test: meal init", () => {
    it("check if meal init api works", (done) => {
        request(url_meal_init, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    //
    it("check statusCode key in body(200)", (done) => {
        request(url_meal_init, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200)
            done()
        })
    })
})

describe("Test: get meals", () => {
    it("check if meal init api works", (done) => {
        request(url_get_meals, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    //
    it("check statusCode key in body(200)", (done) => {
        request(url_get_meals, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200)
            done()
        })
    })
    it("check if body has all properties", (done) => {
        request(url_get_meals, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.result).to.have.lengthOf(3)
            for(let i = 0; i < 3; i++){
                expect(body.result[i]).to.have.a.property("_id")
                expect(body.result[i]).to.have.a.property("meal_type")
                expect(body.result[i]).to.have.a.property("meals")
                expect(body.result[i].meals).to.have.lengthOf(7)
            }
            done()
        })
    })
})

describe("Test: get plans", () => {
    it("check if get plans api works", (done) => {
        request(url_get_plans, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    //
    it("check statusCode key in body(200)", (done) => {
        request(url_get_plans, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200)
            done()
        })
    })
    it("check if body has all properties", (done) => {
        request(url_get_plans, (error, response, body) => {
            body = JSON.parse(body)
            expect(body.result[0]).to.have.a.property("_id")
            expect(body.result[0]).to.have.a.property("day_order")
            expect(body.result[0]).to.have.a.property("week_order")
            done()
        })
    })
})

describe("Test: place order", () => {
    it("check if place order api works", (done) => {
        request(url_place_Order, (error, response, body) => {
            expect(response.statusCode).to.equal(204)
            done()
        })
    })
})