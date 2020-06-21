import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DataSutent from './dataStudent';
import "./studentList.scss";


const studentList = () => {
  return (
    <frameElement>
      <label className="lb-ifoday">
        Mar 25, 2020 8:49 PM ID: 601-204-700
      </label>
      <MDBDataTable
      scrollY
      maxHeight="200px"
      striped
      bordered
      small
      data={DataSutent}
    />
    </frameElement>
  );
}

export default studentList;