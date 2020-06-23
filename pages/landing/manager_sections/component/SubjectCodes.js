import React, {useEffect, useState} from 'react'
import "./sideBar.scss"
import axios from 'axios'
export default  () =>  {
    const [courses, setCourse]  = useState([])
    const [loading, setLoading]  = useState(true)
    const [class_id, setClassId] = useState(null)

    const getInfoTeacher =  () => {     
         axios("http://localhost:4000/data/dataclass")
        .then(res => {
            setCourse(res.data)
        }) 
    }

    const showStudent = (classId) => {
        setClassId(classId)
    }

    useEffect(() => {
      getInfoTeacher()
    }, [])

    return (
        <>
            <button className = "btn_create">+ Create new class</button>
            <button className = "btn_upgrade">* Upgrade plan</button>
                {courses.length !== 0 && courses.map(course => 
                  ( <div key={course.class_id} onClick={() => showStudent(course.class_id)}>
                      {course.class_name}
                  </div>)
                )}      
        </>
    )
}