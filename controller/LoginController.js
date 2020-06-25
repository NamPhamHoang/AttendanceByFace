const express = require('express')

const { Client } = require('pg');

module.exports.PostLogin = async(req,res) => {
    const client = new Client({
        user: 'postgres',
        host: '172.21.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    await client.query("select * from teacher")
    .then((results) => {
        let teacher = results.rows.filter(user => user.teacher_id==req.body.Username)[0];
        if(!teacher) {
            res.status(400).send({
                error: "User not found"
            })
            res.redirect('/partner')
        }
        else {
            if(teacher.teacher_password == req.body.Password) {
                res.cookie("teacher", teacher)
                res.status(200).redirect('/')
            }
            else {
                res.status(500).send({
                    error: ['Wrong password']
                })
                res.redirect('/manage')
            }
        }
    })
}

module.exports.getLogin = function (req, res) {
    res.status(200).render("/")
}

module.exports.authLogin = function (req, res, next) {
     if (req.cookies.teacher==undefined) {
        res.redirect('/partner') 
    }
    else next()
}