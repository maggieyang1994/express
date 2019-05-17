var express = require('express');
var router = express.Router();
var mysql = require("promise-mysql")
/* GET users listing. */

let pool = mysql.createPool({
  host: '193.112.111.124',
  user: "dev",
  password: "pwd",
  database: "yirenzhixia"
})
router.get('/', async function(req, res, next) {
  let res1 =await pool.query("select * from directory1 order by chapterId asc");
  res.send(JSON.stringify(res1));
});
router.get('/detail', async function(req, res, next) {
  let res1 = await pool.query(`
  select distinct image_url as ImageUrl from ImageList where ImageList.chapter_id = ${req.query.chapterId}
  `);
  res1 = res1.sort((a,b) => a.ImageUrl.match(/\d+(?=\.jpg)/) - b.ImageUrl.match(/\d+(?=\.jpg)/))
  res.send(res1)
});
router.get("/say", function(req, res, next) {
  let {cb} = req.query;
  res.send(`${cb}('hello')`)
})

router.get("/getCookie", function(req, res, next){
  // res.header("Set-Cookie", "age ='18';HttpOnly")
  // res.header("Set-Cookie", "userName ='maggie';HttpOnly;Expires=Wed, 21 Oct 2019 07:28:00 GMT")
  res.send("hello world")
})

module.exports = router;
