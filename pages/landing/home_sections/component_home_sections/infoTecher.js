import React, { Component } from 'react'
import axios from 'axios'
export class infoTecher extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataTeacher: [],
        }
    }
    componentDidMount() {
       this.getData()
    }

    getData = () => {
        axios.get('http://localhost:4000/teacherData').then(res =>{
            const data = res.data
            this.setState({
                dataTeacher: data
            }) 
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-4 ">
                    <div className="wrap-img-teacher">
                        <img></img> 
                    </div>
                   
                </div>
                <div className="col-8 ">
                    <ul>
                        <li>
                          {this.state.dataTeacher.map(teacher => <li>{teacher.Teacher_Name}</li>)}
                        </li>
                        <li>
                            Gmail: nguyenducman@gmail.com
                        </li>
                        <li>
                            Level: Thac Si
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default infoTecher
