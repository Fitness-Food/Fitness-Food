# Fitness Food 
## _Auther: Tao Pan_

This page is a group work

---

`public` folder is where the website stored, includes home page & meal page

### Add A New Page

1. create a new folder in `public` folder for the new page, the folder name is the same as **request**
2. create html / js / css for this new page
3. if the page needs to load some html tag widgets, create a new widget for the page. e.g. `public/components/mealPageWidgets.js`
4. create a req for server in `server.js`: `app.get('/meal', (req, res) => {...})`
5. modify the **MVC** related files if required (`routes / controllers / services` folders)

<mark>NOTICE: Please be aware to use the correct **path** (e.g. `../xx/yy` `./xx/yy`) when you create new folders/files</mark>

---