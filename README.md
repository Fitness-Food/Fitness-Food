# Fitness Food 
### _Auther: Tao Pan, Kathy, Lin_
---

## The website is consisted with 4 pages: Home / Menu / Meal / Login

* **Kathy**: Home / Menu page
* **Tao Pan**: Server & Meal page
* **Lin**: register & Login page

---
## `Home & Menu Page` worked by ZHIGUI (Kathy) ZHANG

Home page shows our logo, slogan and two buttons. There provide two button for the user, one is **A DIET PLAN**, another one is **MAKE AN ORDER**.
1. the user click the **A DIET PLAN**, it turn to the register page.
2. User can make register in that page.
3. the user click the **Home** on the navbar, it will back to the homepage.
4. the user click the **MAKE AN ORDER**, it turn to the menu page.
5. User can look through our menu and information for the delivery and takeout.

Menu page provide our menu, delivery, takeout information and photos for the food. User can click the **MAKE AN ORDER** on the homepage or **Menu** on the navbar to see our Menu page.


Files included
``` 
    public/components/navbar.html
    public/components/footer.html
    public/components/mealPageWidgets.js
    meal/*
    public/index.html
    public/style.css
    pulic/menu/index.html
    pulic/menu/style.css
```
---
## `Server` worked by Tao Pan
The server side is managed with MVC structure  
API for 4 main page
```js
    "/meal" "/menu" "/login" "/register"
```
API for meal page 
```js
    "/api/mealInit" // request meal page's initial content
    "/api/getMeals" // request whole meals' info list
    "/api/getPlans" // request day & week meal plan for customers
    "/api/checkout" // request checkout list based on day / week meal plan
    "/api/placeOrder" // place order, save the order to mongodb
```
Files included
``` 
    server.js 
    controlers/*
    services/*
    routes/*
    test/*
    dbConnection.js
```

---
## `Meal Page` worked by Tao Pan
Meal page is about providing customers a UI for selecting their daily or weekly meal plan, customers can place meal order by day or week.  
1. Once the customer is logged in, he/she can see his/her BMI on the Hero area(`not finished, due to login page`)
2. Customer can click breakfast/lunch/dinner cubes for switching meal, the daily and weekly calories will automatically vary based on customer's choices 
3. By clicking **Order** cube, a checkout modal will pop out and showing the plan customer chose
4. The repeated meals will be combined on the checkout modal, meanwhile, the quantility and price will also be combined too (this operation occurs on the server)
5. Click **CHECK** button on the checkout modal, the order will be saved to mongodb

Files included
```
    public/components/navbar.html
    public/components/footer.html
    public/components/mealPageWidgets.js
    public/components/widgets.js
    meal/*

```

---
## `Login Page` worked by Lin

Files included
``` 
    public/login/index.html
    public/login/init.js
    public/register/index.html
    public/register/init.js
``` 
---
    ## `register & login Page` worked by Lin
register page is about that customers allowed register with account name and password.
1. Once the customer is click the register page, he/she can insert the account name and set a password to register.
2. Customer can click login Page, the customer can login with the registed account name and password.
3. After the customer login, the page will turn to menu page for ordering food.
4. The data of account will be saved to mongodb.

```
---

<details>
<summary>History Update</summary>


`public` folder is where the website stored, includes home page & meal page

### Add A New Page

1. create a new folder in `public` folder for the new page, the folder name is the same as **request**
2. create html / js / css for this new page
3. if the page needs to load some html tag widgets, create a new widget for the page. e.g. `public/components/mealPageWidgets.js`
4. create a req for server in `server.js`: `app.get('/meal', (req, res) => {...})`
5. modify the **MVC** related files if required (`routes / controllers / services` folders)

<mark>NOTICE: Please be aware to use the correct **path** (e.g. `../xx/yy` `./xx/yy`) when you create new folders/files</mark>
---
</details>
