import React, {useEffect, useState, useContext, useCallback} from 'react'
import "./sideBar.scss"
import ThemeContext from '../../AppContext'
import axios from 'axios'
export default  (props) =>  {
    const [courses, setCourse]  = useState([])
    const [class_id, setClassId] = useState(10)
    const {setState, setAmount} = useContext(ThemeContext)
    const getInfoTeacher =  () => {     
         axios("http://localhost:4000/data/dataclass")
        .then(res => {
            setCourse(res.data)
        }) 
    }
    const showStudent = (classId, amount) => {
        setClassId(classId)
        setAmount(amount)
        setState(class_id)
    }
    useEffect(() => {
      getInfoTeacher()
    }, [])
    return (
        <>
            <button className = "btn_create">+ Create new class</button>
            <button className = "btn_upgrade">* Upgrade plan</button>
            <div id="wrapper">
                <ul className="wrap-code-subject scrollbar" id="style-default">
                    {courses.length !== 0 && courses.map(course => 
                        ( <li className="list-code-subject force-overflow" key={course.class_id} onClick={() => showStudent(course.class_id, course.amount)}>
                            {course.class_name}
                        </li>)
                        )}
                </ul>
                
            </div>
              
        </>
    )
}   