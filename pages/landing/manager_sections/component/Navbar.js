import React, { Component } from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand ">
                        <img src={logo} width="30" height="30" alt=""/>
                        AttendanceByFace
                    </Link>
                    <button className="btn btn-link btn-sm order-1 order-lg-0 " id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
               </nav>
            </div>
        )
    }
}
