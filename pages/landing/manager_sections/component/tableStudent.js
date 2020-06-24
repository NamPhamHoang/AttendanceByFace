import React, { useContext, useEffect, useState, useCallback} from "react";
import "./tableStudent.scss"
import ThemeContext from '../../AppContext'
import axios from "axios";
export default  () =>  {
  const {state, amount} = useContext(ThemeContext)
  const [students, setStudent] = useState([])
  const [loading, setLoaing] = useState(true)
  const showStudent = () => {
   axios(`http://localhost:4000/data/datastudent?classId=${state}`)
   .then(res => {
     setStudent(res.data)
     setLoaing(false)
   })
  }
  useEffect(()=>{
    if(state){
      showStudent()
    }
     
  },[state])

  const listClass = () => {
    var array = []
    
    for (let index = 1; index <= amount; index++) {
      array.push(index)
    }
    return array
  }
  
  return (
    
    <div className="col-11 wrap-tb card-body">
      {loading
        ? 
          <h1>loading ...</h1>
        :
          <div className="table-responsive">
            <table className="table tablesorter">
              <thead className=" thead-dark text-primary">
                <tr className="tb-head">
                  <th className="number-oder" scope="col ">NumOder</th>
                  <th scope="col">fullName</th>
                  <th scope="col">studenID</th>
                  {listClass().length!==0 ? listClass().map(ele => (<th>day {ele} </th>)):<h1>loading</h1>}
                </tr>
              </thead>
              <tbody>
                {students.length !== 0 
                ? students.map(student => {
                  return (<tr>
                  <th scope="row" key={student.student_id}>1</th>
                  <td>{student.student_name}</td>
                  <td>{student.student_id}</td>
                  <td>{student.attendance_score}</td>
                </tr>)
                })
                : <p></p>
              }
              </tbody>
            </table>
          </div>
      }
    </div>
  );
}
