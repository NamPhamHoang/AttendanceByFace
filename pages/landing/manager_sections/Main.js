import React, { useEffect } from "react";
import TableStudent from "./component/tableStudent"
import Sidebar from "./component/SideBar";
import { Row, Col } from "react-bootstrap";
import "./Manage.scss"
export default function Main() {
  
  return (
    <div className="manager_section">
      <Row>
        <Col xs={2} id="sidebar-wrapper" className="side-bar">
          <Sidebar />
        </Col>
        <Col xs={9} id="page-content-wrapper">
            <TableStudent />
        </Col>
      </Row>
    </div>
  );
}

