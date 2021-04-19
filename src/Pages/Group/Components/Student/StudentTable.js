import React, {useState} from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import StudentInfo from "./StudentInfo";
import GroupSubTable from "./GroupSubTable";

export default function StudentTable(props) {
  const [showStudentModal, setShowStudentModal] = useState(false);

  function showStudent() {
      setShowStudentModal(true);
  }
  
  function turnOffStudent() {
      setShowStudentModal(false);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td> Name </td>
          <td> Net ID </td>
          <td> UTD ID </td>
          <td> Email </td>
          <td> Hold </td>
          <td> Groups </td> 
        </tr>
      </thead>
        {props.list.map((item, i) => {  return (<StudentInfo key={i} item={item} show={showStudentModal} showOn={showStudent} showOff={turnOffStudent} />); } ) }
    </Table>
  );
}
