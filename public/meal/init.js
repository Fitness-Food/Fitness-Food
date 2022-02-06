const REQ_INIT = "/api/mealInit"

let weekPlan = null
let Meals = {
    "breakfast": null,
    "lunch": null,
    "dinner": null
}

const post_meals_setting = {
    "url": "/api/getMeals",
    "type": "POST",
    "timeout": 500,
    "headers": {
        "Content-Type": "application/json"
    },
}

const post_plans_setting = {
    "url": "/api/getPlans",
    "type": "POST",
    "timeout": 500,
    "headers": {
        "Content-Type": "application/json"
    },
}

//


let socket = io()

socket.on('newConnection', msg => {
    console.log("server msg: ", msg);
})

//main
$(document).ready(() => {
    console.log('page ready');
    $.get(REQ_INIT, (res) => {
        if(res.statusCode != 200) {
            console.log('page init failed!');
            return null
        }
        let result = res.result
        //
        $("#hero_area").append(createHero(result))
        $("#daily_area").append(createDailyTable(result))
        $("#weekly_area").append(createWeeklyTable(result))
        $("#nav_bar").load('../components/navbar.html', () => {
            $('.scrollspy').scrollSpy()
        })
        $('.modal').modal();
        $("#footer").load('../components/footer.html')
    })

    $.ajax(post_meals_setting).done((meals_res) => {
        //console.log('---> client get meals data: ', meals_res);
        if(meals_res.statusCode != 200) {
            console.log('-> client get meals data failed!');
            return null
        }
        Meals.breakfast = {"type": meals_res.result[0].meal_type, "sets": meals_res.result[0].meals}
        Meals.lunch = {"type": meals_res.result[1].meal_type, "sets": meals_res.result[1].meals}
        Meals.dinner = {"type": meals_res.result[2].meal_type, "sets": meals_res.result[2].meals}

        $.ajax(post_plans_setting).done((plan_res) => {
            //console.log('---> client get plans data: ', plan_res);
            if(plan_res.statusCode != 200) {
                console.log('-> client get plans data failed!');
                return null
            }
            weekPlan = plan_res.result[0].week_order

            createDayTr(weekPlan, Meals)
            createWeekTable(weekPlan, Meals)

            createMealModal(TYPE_D, Meals.breakfast)
            createMealModal(TYPE_W, Meals.breakfast)
            createMealModal(TYPE_D, Meals.lunch)
            createMealModal(TYPE_W, Meals.lunch)
            createMealModal(TYPE_D, Meals.dinner)
            createMealModal(TYPE_W, Meals.dinner)

            createCheckOutModal(TYPE_D)
            createCheckOutModal(TYPE_W)
        })
    })    
})