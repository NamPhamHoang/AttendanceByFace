import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DataSutent from '../data/dataStudent';

const studentList = () => {
  
  return (
  

    <MDBDataTable
      scrollY
      maxHeight="200px"
      striped
      bordered
      small
      data={DataSutent}
    />
   
  );
}

export default studentList;
