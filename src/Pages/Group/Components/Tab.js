import { Tab, Tabs } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import GroupTable from "./Group/GroupTable";
import React from "react";

export default function GroupTab(props) {
  return (
    <Tabs defaultActiveKey="Group" id="uncontrolled-tab-example">
      <Tab eventKey="Student" title="Student">
        {props.studentList && (
          <StudentTable
            list={props.studentList}
            setList={props.setStudentList}
          />
        )}
      </Tab>
      <Tab eventKey="Group" title="Group">
        {props.groupList && (
          <GroupTable list={props.groupList} setList={props.setGroupList} />
        )}
      </Tab>
    </Tabs>
  );
}
