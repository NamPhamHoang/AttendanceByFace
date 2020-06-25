import React, { Component, useEffect } from "react";
import "./sideBar.scss";
import SearchSideBar from "./SearchSideBar";
import CardTeacher from "./CartTeacher";
import SubjectCodes from "./SubjectCodes";

export default (props) => {
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

