import React, { Component } from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="" className="navbar-brand ">
                        <img src={logo} width="30" height="30" alt=""/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                attendance
                            </Link>
                        </li>
                    </ul>
                    

               </nav>
            </div>
        )
    }
}
