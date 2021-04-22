import React, { useState, useEffect } from "react";
import Axios from "axios";
import GroupTab from "./Components/Tab";
import { Button } from "react-bootstrap";

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

    const url = host + route + "?json=true";
    Axios.get(url)
      .then((response) => {
        setGroupList(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function GT() {
    if (studentList && groupList) {
      return <GroupTab studentList={studentList} groupList={groupList} />;
    } else {
      return <div></div>;
    }
  }

  useEffect(() => {
    getGroupInfo();
  }, []);
  return (
    <div>
      <GT />
      <Button
        onClick={() => {
          getStudentInfo();
          getGroupInfo();
        }}
      >
        Refresh
      </Button>
    </div>
  );
}
