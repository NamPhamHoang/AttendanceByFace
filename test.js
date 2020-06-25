<<<<<<< HEAD

function checkCard(str) {
    var win = new RegExp(/^[0-9]{4}$/)
    return win.test(str)
}

console.log(checkCard("37280"))
=======
const express = require('express')

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '172.18.0.3',
    database: 'CDIO_2',
    password: 'postgres',
    port: 5432,
});

client.connect()
client.query("select * from teacher")
.then(res => console.log(res))
>>>>>>> master-2
