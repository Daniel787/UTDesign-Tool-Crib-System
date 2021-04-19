import { Tab, Tabs } from "react-bootstrap";
import StudentTable from "./Student/StudentTable";
import React, {useState, useEffect} from "react";

export default function GroupTab(props) {

 
  return (
    <Tabs defaultActiveKey="Student" id="uncontrolled-tab-example">
      <Tab eventKey="Student" title="Student">
      <StudentTable list={props.studentList}/>
      </Tab>
    </Tabs>
  );
}
