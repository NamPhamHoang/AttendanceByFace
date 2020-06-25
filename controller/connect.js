const express = require('express')

const { Client } = require('pg');

const router = express.Router()

  
router.get('/datastudent', async(req,res) => {
    let classId = req.query
    console.log(classId.classId)
    const client = new Client({
        user: 'postgres',
        host: '172.18.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    const student = await client.query(`select * from student where class_Id = ${Number(req.query.classId)}`)
    res.send(student.rows)
})  

router.get('/datateacher' , async(req,res) => {
    const client = new Client({
        user: 'postgres',
        host: '172.18.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    const student = await client.query("select * from teacher where TEACHER_ID = $1", [req.cookies.teacher.teacher_id])
    res.send(student.rows)
})

router.get('/dataclass' , async(req,res) => {
    const client = new Client({
        user: 'postgres',
        host: '172.18.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    const student = await client.query("select * from class where TEACHER_ID = $1", [req.cookies.teacher.teacher_id])
    res.send(student.rows)
})

router.post('/datastudent', (req,res) => {
    console.log(req.body)
})


module.exports = router

