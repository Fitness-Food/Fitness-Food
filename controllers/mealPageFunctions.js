const { list } = require("mocha/lib/reporters")

const checkRepeat = (arr) => {
    let res = {}

    return arr.reduce((item, next) => {
        //res[next.id] ? '' : res[next.id] = true && item.push(next)
        if(res[next.id]) { //  repeated
            next.qty++
            next.price += next.price
        } else { // new
            next.qty = 1
            res[next.id] = true && item.push(next)
        }
        return item
    }, [])
    
}

const createChecklist = (meals, data) => {
    let tempList = []
    data.forEach(element => {
        tempList.push(meals[0].meals.find(item => item.name === meals[0].meals[element.brf].name))
        tempList.push(meals[1].meals.find(item => item.name === meals[1].meals[element.lch].name))
        tempList.push(meals[2].meals.find(item => item.name === meals[2].meals[element.din].name))
    });

    tempList.forEach((item) => {
        item.qty = 0
    })

    return checkRepeat(tempList)
}

module.exports = {
    createChecklist
}