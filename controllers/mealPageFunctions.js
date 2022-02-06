const createChecklist = (meals, data) => {
    let tempList = []
    tempList.push(meals[0].meals.find(item => item.name === meals[0].meals[data.brf].name) )
    tempList.push(meals[1].meals.find(item => item.name === meals[1].meals[data.lch].name) )
    tempList.push(meals[2].meals.find(item => item.name === meals[2].meals[data.din].name) )

    return tempList
}

module.exports = {
    createChecklist
}