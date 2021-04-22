import { Tab, Tabs, Button, Modal, Form } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import GroupTable from "./Group/GroupTable";
import React, { useState, useEffect } from "react";

export default function GroupTab(props) {
  return (
    <Tabs defaultActiveKey="Student" id="uncontrolled-tab-example">
      <Tab eventKey="Student" title="Student">
        <StudentTable list={props.studentList} />
      </Tab>
      <Tab eventkey="Group" title="Group">
        <GroupTable list={props.groupList} />
      </Tab>
    </Tabs>
  );
}
