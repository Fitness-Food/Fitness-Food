//let holder = "text holder"
let cellCount = 0;

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
    return `
        <div class="weekdayCube">
            ${wkday}
        </div>
    `
}

const cube = (flag, item) => {
    let style = flag ? "cube2" : "cube1"
    return `
        <div class=${style}>
            <h5 class="title">${"name"}</h5>
            <p class="number">${"cal"} KJ</p>
        </div>
    `
}

const calCube = (flag) => {
    let style = flag ? "cube2" : "cube1"
    return `
        <div class=${style}>
            <div class="number">0 KJ</div>
        </div>
    `
}

const empCube = () => {
    return `
        <div class="cube2"></div>
    `
}

const ordCube = () => {
    return `
        <div class="cube1">Order</div>
    `
}

const createDailyTable = res => {
    return `
        <table cellpadding="0" cellspacing="0" >
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

const createMealCells = (item, index) => {
    return `
        <td>${cube(index % 2, item)}</td>
        <td>${cube((index + 1) % 2, item)}</td>
        <td>${cube((index + 2) % 2, item)}</td>
    `
}

const createWKTr = (item, index) => {
    return `
        <tr> 
            <td>${getWKday(index)}</td>
            ${createMealCells(item, index)}
            <td>${calCube((index + 3) % 2)}</td>
            ${(index != 6) ? `<td>${empCube()}</td>`: `<td>${ordCube()}</td>`}
        </tr>`
}

const createMealTable = (res) => {
    res.map((item, index) => {
        $("#wk_table").append(createWKTr(item, index))
    })
}

const createDayTr = (item) => {
    let child = `
        <tr>
            <td>${empCube()}</td>
            <td>${cube(0, item)}</td>
            <td>${cube(1, item)}</td>
            <td>${cube(0, item)}</td>
            <td>${calCube(1)}</td>
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