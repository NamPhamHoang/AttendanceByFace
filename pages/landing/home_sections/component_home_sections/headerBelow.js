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
                                <img src= '/images/logo.png'/> 
                            </div>
                            <ul className="pl-0">
                                <li className="mt-2">
                                    <h2>Duy Tan</h2>
                                </li>
                                <li>
                                    <h5>University</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h1 className="pl-0">
                            FACE REGONITION
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default headerBelow;
