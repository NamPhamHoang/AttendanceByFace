import React, { Component } from 'react'
import './belowHeader.scss';

class headerBelow extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className='col-6'>
                        <div className="row">
                            <div className="wrap-logo">
                                <img src = "./public/images/logo.png"/> 
                            </div>
                            <ul>
                                <li>
                                    <h2>Duy Tan</h2>
                                </li>
                                <li>
                                    University
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h1>
                            FACE REGONITION
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default headerBelow;
