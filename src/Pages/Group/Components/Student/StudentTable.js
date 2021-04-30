import React from "react";
import { Table } from "react-bootstrap";
import StudentInfo from "./StudentInfo";
import CreateStudent from "./CreateStudent";
import Search from "./Search/Search";

// Student table where each row is a student info component
export default function StudentTable(props) {
  const host = process.env.REACT_APP_SERVER_SITE;
  const oldURL = process.env.REACT_APP_STUDENTS_MEMBERS;
  const modifiedRoute = oldURL.replace(/^"(.*)"$/, "$1");

  const url = host + modifiedRoute;

  return (
    <React.Fragment key="table">
      <Search url={url} setList={props.setList} />
      <Table striped bordered hover>
        <thead>
          <tr key="header">
            <td> Name </td>
            <td> Net ID </td>
            <td> Email </td>
            <td> Hold </td>
            <td> Modify </td>
            <td> Groups </td>
          </tr>
        </thead>
        {props.list.map((item, i) => {
          return <StudentInfo key={i} item={item} />;
        })}
      </Table>
      <CreateStudent />
    </React.Fragment>
  );
}
