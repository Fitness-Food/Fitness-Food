const { list } = require("mocha/lib/reporters")

const add = (n1, n2) => {
    let a1 = Number(n1.split('.')[0])
    let a2 = Number(n1.split('.')[1] ? n1.split('.')[1] : '0')
    let b1 = Number(n2.split('.')[0])
    let b2 = Number(n2.split('.')[1] ? n2.split('.')[1] : '0')
    let t1 = a1 + b1 + parseInt((a2 + b2) / 100)
    let t2 = (a2 + b2) % 100
    return `${t1}.${t2}`
}

const multi = (n1, q) => {
    let a1 = Number(n1.split('.')[0])
    let a2 = Number(n1.split('.')[1])
    let t1 = a1 * q + parseInt((a2 * q) / 100)
    let t2 = (a2 * q) % 100
    return `${t1}.${t2}`
}

const checkRepeat = (arr) => {
    let res = {}

    return arr.reduce((item, next) => {
        //res[next.id] ? '' : res[next.id] = true && item.push(next)
        if(res[next.id]) { //  repeated
            next.total = multi((next.price).toString(), ++(next.qty))
        } else { // new
            next.qty = 1
            next.total = (next.price).toString()
            res[next.id] = true && item.push(next)
        }
        return item
    }, [])   
}

const checkoutPrice = (arr) => {
    let price = '0.0'
    arr.forEach((item) => {
        //price += item.total
        price = add(price, item.total)
    })
    return price
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
        item.total = (item.price).toString()
    })

    return checkRepeat(tempList)
}

module.exports = {
    createChecklist,
    checkoutPrice
}