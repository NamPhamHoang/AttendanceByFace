import React, { Component } from 'react'
export class infoTecher extends Component {
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
                            Name: Nguyen Duc Man
                        </li>
                        <li>
                            Age: 42
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
