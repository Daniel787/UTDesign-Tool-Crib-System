import { Tab, Tabs } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import React from "react";

export default function GroupTab(props) {
  function ST() {
    if (props.studentList) {
      return <StudentTable list={props.studentList} />;
    } else {
      return <div> </div>;
    }
  }
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="Student" title="Student">
        <ST />
      </Tab>
    </Tabs>
  );
}
