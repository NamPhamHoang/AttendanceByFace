import React, { Component } from "react";
import "./sideBar.scss";
import SearchSideBar from "./SearchSideBar";
import CardTeacher from "./CartTeacher";
import SubjectCodes from "./SubjectCodes";
export default class SideBar extends Component {

  render() {
    return (
      <div className="sidebar sidebar-cus">
        <div className="sidebar-wrapper">
          <CardTeacher/>
          <hr className="hr-cus" />
          <SearchSideBar/>
          <ul className="list-group vertical-menu">
            <SubjectCodes/>
          </ul>
        </div>
      </div>
    );
  }
}
