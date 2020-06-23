import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function CartTeacher() {

  const [teacher_name, setTeacher] = useState("User")

  const fetchData = () => {
    axios("http://localhost:4000/data/datateacher")
    .then( res => {
      const data = res.data
      setTeacher(data[0].teacher_name)
    })
    .catch(function (error) {
      console.log(error);
   });  
}

  useEffect(() => {
    fetchData()
  }, [])
  return (  
      <div className="card">
        <h2><strong>Attendance</strong> manager</h2>
        <img className="card-img-top img-cus" src="./images/team/ThayMan.png" alt= "Card imag" />
        <div className="text-center"> 
          <p className="card-text  title-name">
              {teacher_name}
          </p>
        </div>
      </div>
    
  );
}
