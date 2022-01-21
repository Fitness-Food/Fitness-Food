let holder = "text holder"
const createHero = res => {
    return `
        <div class="container displayArea">
            <p class="hero-title">Your Diet Plan:</p>
            
            <div class="heroDisplay">
                <div class="row">
                    <div id="user-name" class="col s12 m2">
                        <p>${holder}</p>
                    </div>
                    <div id="BMI-value" class="col s6 m5">
                        <p>Your BMI is considered:</p>
                        <p class="pColor">${holder}</p>
                    </div>
                    <div id="cal-value" class="col s6 m5">
                        <p>Recommended Daily Calories:</p>
                        <p class="pColor">${holder}</p>
                    </div>
                </div>
            </div>
        </div>`
}

const cube = (flag) => {
    let style = flag ? "cube1" : "cube2"
    return `
        <div class=${style}>
            <h5 class="title">meal name</h5>
            <p class="number">number</p>
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
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${ordCube()}</td>
                </tr>
            </tbody>
        </table>
    `
}

const createWeeklyTable = res => {
    return `
        <table>
            <thread>
                <tr>
                    <th>BREAKFAST</th>
                    <th>LUNCH</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                    <th></th>
                </tr>
            </thread>
            <tbody>
                <tr> <!-- monday -->
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${empCube()}</td>
                </tr>
                <tr> <!-- tuesday -->
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${empCube()}</td>
                </tr>
                <tr> <!-- wednesday -->
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${empCube()}</td>
                </tr>
                <tr> <!-- thursday -->
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${empCube()}</td>
                </tr>
                <tr> <!-- wednesday -->
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${cube(1)}</td>
                    <td>${cube(0)}</td>
                    <td>${ordCube()}</td>
                </tr>
                <tr> <!-- tal -->
                    <td>${empCube()}</td>
                    <td>${empCube()}</td>
                    <td>${empCube()}</td>
                    <td>${cube(1)}</td>
                    <td>${empCube()}</td>
                </tr>
            </tbody>
        </table>
    `
}