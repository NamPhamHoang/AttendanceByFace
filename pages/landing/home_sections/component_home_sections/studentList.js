import React from 'react';
import { MDBDataTable } from 'mdbreact';
import DataSutent from './dataStudent';

const studentList = () => {
  
  return (
  

    <MDBDataTable
      scrollY
      headerColor="elegant-color"
      maxHeight="200px"
      striped
      bordered
      small
      data={DataSutent}
    />
   
  );
}

export default studentList;