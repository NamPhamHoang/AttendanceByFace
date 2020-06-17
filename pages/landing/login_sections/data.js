var express = require('express')
var sql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'attendance'
});  

function GetData(callback) {
  connection.connect();
  connection.query('SELECT * from admin', function(err, results, fields) {
      if(err) throw new Error();
      callback(results)
  })
  connection.end()
}  

 GetData(function(res) {
  return data = res
});
