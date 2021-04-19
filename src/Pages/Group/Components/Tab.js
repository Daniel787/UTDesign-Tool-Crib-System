import { Tab, tabs } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import React from "react";

export default function GroupTab() {
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="Student" title="Student">
      <StudentTable />
    </Tab>
  </Tabs> 
}
