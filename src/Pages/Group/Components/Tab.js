import { Tab, Tabs } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import GroupTable from "./Group/GroupTable";
import React from "react";

export default function GroupTab(props) {
  return (
    <Tabs defaultActiveKey="Group" id="uncontrolled-tab-example">
      <Tab eventKey="Student" title="Student">
        {props.studentList && <StudentTable list={props.studentList} />}
      </Tab>
      <Tab eventKey="Group" title="Group">
        {props.groupList && <GroupTable list={props.groupList} />}
      </Tab>
    </Tabs>
  );
}
