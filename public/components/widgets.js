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
