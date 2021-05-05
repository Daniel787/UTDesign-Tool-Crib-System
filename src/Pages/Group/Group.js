import React, { useState, useEffect } from "react";
import Axios from "axios";
import GroupTab from "./Components/Tab";
import { Button } from "react-bootstrap";
import Styles from "./Group.module.css";

export default function Group() {
  const [studentList, setStudentList] = useState(null);
  const [groupList, setGroupList] = useState(null);

  function getStudentInfo() {
    const host = process.env.REACT_APP_SERVER_SITE;
    const route = process.env.REACT_APP_STUDENTS_MEMBERS;

    const url = host + route + "?json=true";
    Axios.get(url).then((response) => {
      setStudentList(response.data);
      // console.log(response.data);
    });
  }

  function getGroupInfo() {
    const host = process.env.REACT_APP_SERVER_SITE;
    const route = process.env.REACT_APP_GROUP_MEMBERS;
    // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
    const modifiedRoute = route.replace(/^"(.*)"$/, "$1");
    const url = host + modifiedRoute + "?json=true";
    // const url = "http://localhost:5000" + "/groups/withmembers" + "?json=true";
    Axios.get(url).then((response) => {
      setGroupList(response.data);
    });
  }

  useEffect(() => {
    getStudentInfo();
    getGroupInfo();
  }, []);
  return (
    <div className={Styles.Body}>
      <h1>Student & Group</h1>
      <GroupTab
        studentList={studentList}
        setStudentList={setStudentList}
        groupList={groupList}
        setGroupList={setGroupList}
      />
      <div className={Styles.Parent}>
        <Button
          onClick={() => {
            getStudentInfo();
            getGroupInfo();
          }}
          className={Styles.Container}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
}
