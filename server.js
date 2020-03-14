const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'graph_draw_db'
})
connection.connect()
connection.query('SELECT * FROM users', function (err, result) {
    if (err) throw err
  
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.username, row.password)
      });
  })
app.get("/", (req, res)=>{
    res.send("hello world")
})

app.listen(port, ()=>{
   console.log(`listening on port ${port}`) 
})