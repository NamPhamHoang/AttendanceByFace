import React, { useContext, useEffect, useState, useCallback} from "react";
import "./tableStudent.scss"
import ThemeContext from '../../AppContext'
import axios from "axios";
export default  () =>  {
  const {states,setStates} = React.useContext(ThemeContext)
  // const {state,setState} = useContext(ThemeContext)
  // const [students, setStudent] = useState([])
  // console.log(state)
  // const showStudent = () => {
  //  axios(`http://localhost:4000/data/datastudent?classId=${state}`)
  //  .then(res => {
  //    setStudent(res.data)
  //  })
  // }
  // useEffect(()=>{
  //   if(state)
  //     showStudent()
  // },[state])

  return (
    <div className="col-11 wrap-tb card-body">
      <div className="table-responsive">
        <table className="table tablesorter">
          <thead className=" thead-dark text-primary">
            <tr className="tb-head">
              <th className="number-oder" scope="col ">NumOder</th>
              <th scope="col">fullName</th>
              <th scope="col">studenID</th>
              <th scope="col">day one</th>    
            </tr>
          </thead>
          <tbody>
            {/* {students.length !== 0 
            ? students.map(student => {
              return (<tr>
              <th scope="row" key={student.student_id}>1</th>
              <td>{student.student_name}</td>
              <td>{student.student_id}</td>
              <td>@mdo</td>
            </tr>)
            })
            : <p></p>
          } */}
           <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <div className="stick" 
                      onClick={ () => setStates({...states,redCheck : !states.redCheck })}
                      style={{backgroundColor: states.redCheck ? "red" : "green"}}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
