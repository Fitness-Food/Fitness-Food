const TYPE_D = "day"
const TYPE_W = "wk"
const REQ_INIT = "/api/mealInit"
const REQ_CHECKOUT = "/api/checkout" 

let day_meals_plan = null
let week_meals_plan = null
let currentFocusItem = null
let meal_back = null
let checkoutList = []

const getWKday = (num) => {
    let wkday = null
    switch(num) {
        case 0:
            wkday = "Mon"
            break
        case 1:
            wkday = "Tue"
            break
        case 2:
            wkday = "Wed"
            break
        case 3:
            wkday = "Thu"
            break
        case 4:
            wkday = "Fri"
            break
        case 5:
            wkday = "Sat"
            break
        case 6:
            wkday = "Sun"
            break
    }
    return `<div class="weekdayCube">${wkday}</div>`
}


const createCheckOutModal = () => {
    $(`#checkout`).append(`
        <div class="modal-content">
            <h4>Checkout:</h4>
            <hr />

            <div class="row">
                <div id="list" class="col s12 m7">
                    <table>
                        <thead>
                            <tr>
                                <th>Meal</th>
                                <th>Qyt</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div id="total" class="col s12 m5">
                    <div id="total_price"></div>
                </div>
            </div>
            <hr />
        </div>
    `)
}

const createChecklist = (list) => {
    return list.map((item, index) => {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.total}</td>
            </tr>
        `
    })
}

const refreshCheckOutMenu = (type) => {
    let data = type === TYPE_D 
        ? [{brf: day_meals_plan.brf, lch: day_meals_plan.lch, din: day_meals_plan.din}] 
        : week_meals_plan
    const setting = {
        "url": REQ_CHECKOUT,
        "type": "POST",
        "timeout": 500,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data)
    }
    
    $.ajax(setting).done((res) => {
        console.log("-> the checkout result: ", res)
        $(`#checkout #list table tbody`).remove()
        $(`#checkout #list table`).append(`
            <tbody>
                <tr>
                    ${createChecklist(res.checkoutList)}
                </tr>
            </tbody>
        `)
        $(`#total_price`).text(`Total Price: $${res.total}`)
    })
}

//type = day / wk
//mealtype == brf / lch /din
const createMealModal = (type, meal) => {
    $(`#${type}_meal_modal_${meal.type}`).append(`
        <div class="modal-content">
            <h4>Switch Meal</h4>
            <div class="row">
                <form id="${type}_modal_list_${meal.type}" class="col s12"></form>
            </div>
            <div class="modal-footer">
                <a id="${type}_switch_${meal.type}_btn" class="modal-close waves-effect blue waves-blue btn">OK</a>
            </div>
        </div>
    `)

    meal.sets.forEach((item, index) => {
        $(`#${type}_modal_list_${meal.type}`).append(`
            <p>
                <label> 
                    <input class="with-gap" value=${index} name="${type}_group_${meal.type}" type="radio" 
                        ${index == 0 ? "checked" : ""}/>
                    <span>${item.name}</span>
                    <span> - ${item.cal} KJ Cal</span>
                    <span> - $${item.price}</span>
                </label>
            </p>`)
    })

    const cubeClick = () => {
        const value = parseInt($(`input[name='${currentFocusItem.type}_group_${currentFocusItem.meal_type}']:radio:checked`).val())
        let mealIndex = 2
        let meals = null
        if(currentFocusItem.type === TYPE_D){
            switch(currentFocusItem.meal_type) {
                case "brf": //breakfast
                    mealIndex = 2
                    day_meals_plan.brf = value
                    meals = meal_back.breakfast
                    break;
                case "lch": //lunch
                    mealIndex = 3
                    day_meals_plan.lch = value
                    meals = meal_back.lunch
                    break;
                case "din": // dinner
                    mealIndex = 4
                    day_meals_plan.din = value
                    meals = meal_back.dinner
                    break;
            }
        } else if (currentFocusItem.type === TYPE_W) {
            switch(currentFocusItem.meal_type) {
                case "brf": //breakfast
                    mealIndex = 2
                    week_meals_plan[currentFocusItem.day].brf = value
                    meals = meal_back.breakfast
                    break;
                case "lch": //lunch
                    mealIndex = 3
                    week_meals_plan[currentFocusItem.day].lch = value
                    meals = meal_back.lunch
                    break;
                case "din": // dinner
                    mealIndex = 4
                    week_meals_plan[currentFocusItem.day].din = value
                    meals = meal_back.dinner
                    break;
            }
        }
        //brk == 2, lch == 3, din == 4
        if(currentFocusItem.type === TYPE_D) {
            $(`#day_table tr td:nth-child(${mealIndex}) a p:nth-child(1)`).text(meals.sets[value].name)
            $(`#day_table tr td:nth-child(${mealIndex}) a p:nth-child(2)`).text(meals.sets[value].cal + " KJ")
        } else if(currentFocusItem.type === TYPE_W) {
            $(`#wk_table tr:nth-child(${currentFocusItem.day + 1}) td:nth-child(${mealIndex}) a p:nth-child(1)`).text(meals.sets[value].name)
            $(`#wk_table tr:nth-child(${currentFocusItem.day + 1}) td:nth-child(${mealIndex}) a p:nth-child(2)`).text(meals.sets[value].cal + " KJ")
        }
        refreshCalCube()
    }

    $(`#${type}_switch_${meal.type}_btn`).click(() => cubeClick())
}

const setModalPlan = (type, meal_type, day) => {
    currentFocusItem = {
        type,
        meal_type,
        day: Number(day)
    }
}

//type = day / wk
//meal.type == brf / lch /din
const cube = (type, sflag, meal, day) => {
    let style = sflag ? "cube2" : "cube1"
    return `
        <a class="${style} modal-trigger" href="#${type}_meal_modal_${meal.type}" 
            onclick="setModalPlan('${type}', '${meal.type}', '${day}')">
            <p id="meal_name" class="title">${meal.sets[day].name}</p>
            <p id="cal" class="number">${meal.sets[day].cal} KJ</p>
        </a>
    `
}

const calculateDayCal = (plan, meals) => {
    return meals.breakfast.sets[plan.brf].cal 
            + meals.lunch.sets[plan.lch].cal 
            + meals.dinner.sets[plan.din].cal
}

const refreshCalCube = () => {
    let num = 0
    let id = ''
    if(currentFocusItem.type === TYPE_D) {
        id = `#${currentFocusItem.type}_calories_cube`
        num = calculateDayCal(day_meals_plan, meal_back)
    } else {
        id = `#${currentFocusItem.type}_calories_cube_${currentFocusItem.day}`
        num = calculateDayCal(week_meals_plan[currentFocusItem.day], meal_back)
    }
    $(id).text(`${num} KJ`)
}

const calCube = (type, index, plan, meals) => {
    let style = (index + 3) % 2 ? "cube2" : "cube1"
    let dayIndex = type === TYPE_D ? '' : `_${index}`
    return `
        <div class="${style} calCube">
            <div id="${type}_calories_cube${dayIndex}" class="number">${calculateDayCal(plan, meals)} KJ</div>
        </div>
    `
}

const empCube = () => {
    return `
        <div class=""></div>
    `
}

const ordCube = (type) => {
    return `
        <a class="cube1 modal-trigger" href="#checkout"
            onclick="refreshCheckOutMenu('${type}')"
        >
            <p class="title">Order</p>
        </a>
    `
}

const createDailyTable = res => {
    //cellpadding="0" cellspacing="0"
    return `
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="day_table">
            </tbody>
        </table>
    `
}

const createMealCells = (plan, meals, index) => {
    return `
        <td>${cube(TYPE_W, index % 2, meals.breakfast, plan.brf)}</td>
        <td>${cube(TYPE_W, (index + 1) % 2, meals.lunch, plan.lch)}</td>
        <td>${cube(TYPE_W, (index + 2) % 2, meals.dinner, plan.din)}</td>
    `
}

const createWKTr = (plan, index, meals) => {
    return `
        <tr> 
            <td>${getWKday(index)}</td>
            ${createMealCells(plan, meals, index)}
            <td>${calCube(TYPE_W, index, plan, meals)}</td>
            ${(index != 6) ? `<td>${empCube()}</td>`: `<td>${ordCube(TYPE_W)}</td>`}
        </tr>`
}

const createWeekTable = (plans, meals) => {
    week_meals_plan = plans
    week_meals_plan.map((plan, index) => {
        $("#wk_table").append(createWKTr(plan, index, meals))
    })
}

const createDayTr = (plan, meals) => {
    // 0 = mon, 1 = tue ... 6 = sun
    let day = (new Date().getDay() + 6) % 7
    day_meals_plan = plan[day]
    meal_back = meals
    let child = `
        <tr>
            <td>${getWKday(day)}</td>
            <td>${cube(TYPE_D, 0, meals.breakfast, day)}</td>
            <td>${cube(TYPE_D, 1, meals.lunch, day)}</td>
            <td>${cube(TYPE_D, 0, meals.dinner, day)}</td>
            <td>${calCube(TYPE_D, 0, day_meals_plan, meals)}</td>
            <td>${ordCube(TYPE_D)}</td>
        </tr>`
    $("#day_table").append(child)
}

const createWeeklyTable = res => {
    return `
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="wk_table"></tbody>
        </table>
    `
}