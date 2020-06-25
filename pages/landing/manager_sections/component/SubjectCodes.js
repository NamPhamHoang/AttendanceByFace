import React, {useEffect, useState, useContext} from 'react'
import "./sideBar.scss"
import ThemeContext from '../../AppContext'
import axios from 'axios'
export default  (props) =>  {
    // const [courses, setCourse]  = useState([])
    // const [class_id, setClassId] = useState(1)
    // const {state,setState} = useContext(ThemeContext)
    // const getInfoTeacher =  () => {     
    //      axios("http://localhost:4000/data/dataclass")
    //     .then(res => {
    //         setCourse(res.data)
    //     }) 
    // }
    // const showStudent = (classId) => {
    //     setClassId(classId)
    //     setState(class_id)
    // }
    // useEffect(() => {
    //   getInfoTeacher()
    // }, [])
    const {states,setStates} = React.useContext(ThemeContext)

    return (
        <>
            <button className = "btn_create"> Create new class</button>
            <button className = "btn_upgrade"> Upgrade plan</button>
            <div id="wrapper">
                <ul className="wrap-code-subject scrollbar" id="style-default">
                    {
                        states.objectCodes.map( item =>{
                        return <li className="list-code-subject force-overflow" key={item.id}>{item.title}</li>
                        })
                    }
                    
                </ul>
            </div>
           
                {/* {courses.length !== 0 && courses.map(course => 
                  ( <div key={course.class_id} onClick={() => showStudent(course.class_id)}>
                      {course.class_name}
                  </div>)
                )}       */
                }
        </>
    )
}   