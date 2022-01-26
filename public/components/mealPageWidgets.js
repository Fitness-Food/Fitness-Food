let day_meals_plan = null
let week_meals_plan = null

let meal_back = null

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
                    <input class="with-gap" value=${index} name="group1" type="radio" ${index == 0 ? "checked" : ""}/>
                    <span>${item.name}</span>
                    <span> - ${item.cal} KJ Cal</span>
                </label>
            </p>`)
    })

    const cubeClick = (type, mtype) => {
        const value = parseInt($(`input[name='group1']:radio:checked`).val())
        switch(mtype) {
            case "brf": //breakfast
                day_meals_plan.brf = value
                break;
            case "lch": //lunch
                day_meals_plan.lch = value
                break;
            case "din": // dinner
                day_meals_plan.din = value
                break;
        }
        $(`#day_table tr td:nth-child(2) a p:nth-child(1)`).text(meal_back.breakfast.sets[value].name)
        $(`#day_table tr td:nth-child(2) a p:nth-child(2)`).text(meal_back.breakfast.sets[value].cal + " KJ")
    }

    $(`#${type}_switch_${meal.type}_btn`).click(() => cubeClick(type, meal.type))
}

//type = day / wk
//meal.type == brf / lch /din
const cube = (type, sflag, meal, day) => {
    let style = sflag ? "cube2" : "cube1"
    return `
        <a class="${style} modal-trigger" href="#${type}_meal_modal_${meal.type}">
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

const calCube = (flag, plan, meals) => {
    let style = flag ? "cube2" : "cube1"
    return `
        <div class="${style} calCube">
            <div class="number">${calculateDayCal(plan, meals)} KJ</div>
        </div>
    `
}

const empCube = () => {
    return `
        <div class=""></div>
    `
}

const ordCube = () => {
    return `
        <div class="cube1">Order</div>
    `
}

const createDailyTable = res => {
    //cellpadding="0" cellspacing="0"
    return `
        <table>
            <thread>
                <tr>
                    <th></th>
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thread>
            <tbody id="day_table">
            </tbody>
        </table>
    `
}

const createMealCells = (plan, meals, index) => {
    return `
        <td>${cube("wk", index % 2, meals.breakfast, plan.brf)}</td>
        <td>${cube("wk", (index + 1) % 2, meals.lunch, plan.lch)}</td>
        <td>${cube("wk", (index + 2) % 2, meals.dinner, plan.din)}</td>
    `
}

const createWKTr = (plan, index, meals) => {
    return `
        <tr> 
            <td>${getWKday(index)}</td>
            ${createMealCells(plan, meals, index)}
            <td>${calCube((index + 3) % 2, plan, meals)}</td>
            ${(index != 6) ? `<td>${empCube()}</td>`: `<td>${ordCube()}</td>`}
        </tr>`
}

const createWeekTable = (plans, meals) => {
    week_meals_plan = plans
    plans.map((plan, index) => {
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
            <td>${cube("day", 0, meals.breakfast, day)}</td>
            <td>${cube("day", 1, meals.lunch, day)}</td>
            <td>${cube("day", 0, meals.dinner, day)}</td>
            <td>${calCube(1, plan[day], meals)}</td>
            <td>${ordCube()}</td>
        </tr>`
    $("#day_table").append(child)
}

const createWeeklyTable = res => {
    return `
        <table>
            <thread>
                <tr>
                    <th></th>
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thread>
            <tbody id="wk_table"></tbody>
        </table>
    `
}