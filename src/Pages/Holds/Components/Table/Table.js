/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { Table } from "react-bootstrap";
import Row from "./Row/Row";
import axios from "axios";

function DataTable(props) {
  const head = ["Net ID", "Name", "Email", "UTD ID", "Rentals", "Hold"]

  // removes a hold from student by setting hold attrbute to false and modifying the student object
  function removeHold(student) {
    let resultStudent = student
    resultStudent.student_hold = 0
    // modifies the student object by posting new object to server
    axios.post(props.url + "/modify", resultStudent).then((response) => {
      console.log(response.data)
    });
  }

  return (
    <div>
      <Table responsive hover>
        {/* maps array of headers to table header  */}
        <thead>
          <tr>
            {head.map((el, i) => { return (<th key={i}>{el}</th>) })}
          </tr>
        </thead>
        {/* displays rows by mapping the list to row components */}
        <tbody>
          {props.list.map((item) => {
            return (
              <Row key={item.net_id} item={item.student} removeHold={removeHold} styles={props.styles} />
            );
          })}</tbody>
      </Table>
    </div>
  );
}

export default DataTable;
