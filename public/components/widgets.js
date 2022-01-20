let holder = "text holder"
const createHero = res => {
    return `
        <div class="container row">
            <div class="col s12">
                <p class="flow-text hero-title">Your Diet Plan</p>
            </div>
            <div class="col s12">
                <div id="user-name" class="col s12 m2">
                    <p>${holder}</p>
                </div>
                <div id="BMI-value" class="col s12 m5">
                    <p>Your BMI is considered:</p>
                    <p class="pColor">${holder}</p>
                </div>
                <div id="cal-value" class="col s12 m5">
                    <p>Recommended Daily Calories:</p>
                    <p class="pColor">${holder}</p>
                </div>
            </div>
        </div>`
}

const createDailyTable = res => {
    return `
        <table>
            <thread>
                <tr>
                    <th>BREAKFAST</th>
                    <th>SIDE/SNACKS</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
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
                    <th>SIDE/SNACKS</th>
                    <th>DINNER</th>
                    <th>CALORIES</th>
                </tr>
            </thread>
            <tbody>
                <tr> <!-- monday -->
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                </tr>
                <tr> <!-- tuesday -->
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                </tr>
                <tr> <!-- wednesday -->
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                </tr>
                <tr> <!-- thursday -->
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                    <td>${holder}</td>
                </tr>
            </tbody>
        </table>
    `
}