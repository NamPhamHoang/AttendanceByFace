const express = require('express')

const { Client } = require('pg');

const router = express.Router()

router.get('/datastudent', async(req,res) => {
    let classId = req.query
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
    // sao lai co 2 doan code trung the nay?
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
    // dua cai nay len dau dung chung.
    // gio muon lam cai gi mo ta di

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

router.post('/api/attendance', (req, res) => {
    const data = req.body
    data.forEach(student => {
        var id = student.substring(student.length - 4, student.length);
        if(id.match(/^[0-9]{4}$/))
            update(id)
    });
 })


 const update = async (mssv) => {
    const client = new Client({
        user: 'postgres',
        host: '172.21.0.2',
        database: 'CDIO_2',
        password: 'postgres',
        port: 5432,
    });
    await client.connect()
    await client.query(`update student set attendance_score = (attendance_score::integer + 1 ) where student_id = ${mssv}`)
    
 } 
module.exports = router