# Fitness Food 
### _Auther: Tao Pan, Kathy, Lin_
---

## The website is consisted with 4 pages: Home / Menu / Meal / Login

* **Kathy**: Home / Menu page
* **Tao Pan**: Server & Meal page
* **Lin**: register & Login page

---
## `Home & Menu Page` worked by Kathy

Files included
``` 
    public/components/navbar.html
    public/components/footer.html
    public/components/mealPageWidgets.js
    meal/*
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
    public/register/index.html
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
