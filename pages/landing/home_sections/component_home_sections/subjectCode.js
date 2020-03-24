import React, { Component } from 'react'

export class subjectCode extends Component {
    render() {
        var {dataSubjects} = this.props;    
        var elmDataSubject = dataSubjects.map((elm, index)=>{
            return <option key={index}>
                        {elm.name}
                    </option>
        })
        return (
            <div className="col-6">
                <div className="wrap-subjectCode">
                    <label></label>
                    <select>
                       {elmDataSubject}
                    </select>
                </div>
            </div>
        )
    }
}

export default subjectCode
