const express = require('express')

const { Client } = require('pg');

const router = express.Router()

router.get('/datastudent', async(req,res) => {
    let classId = req.query
    console.log(classId.classId)
    const client = new Client({
        user: 'postgres',
        host: '172.21.0.2',
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
        host: '172.21.0.2',
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
        host: '172.21.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    const student = await client.query("select * from class where TEACHER_ID = $1", [req.cookies.teacher.teacher_id])
    res.send(student.rows)
})

//getPostAPI
var array = []
router.post('/api/attendance', (req, res) => {
  array = req.body
  console.log(typeof(array))
})
router.get('/api/attendance', (req, res) => {
  if(array.length !== 0 )
     res.send(array)
     else 
        res.send(array)
})

module.exports = router

