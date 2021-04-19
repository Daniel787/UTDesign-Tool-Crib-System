import React, { useState, useEffect } from "react";
import Axios from "axios";
import GroupTab from "./Components/Tab";
import { Button } from "react-bootstrap";

export default function Group() {
  const [studentList, setStudentList] = useState(null);

  function getStudentInfo() {
    const host = process.env.REACT_APP_SERVER_SITE;
    const route = process.env.REACT_APP_STUDENTS_MEMBERS;

    const url = host + route + '?json="true"';
    Axios.get(url).then((response) => {
      setStudentList(response.data);
      console.log(response.data);
    });
  }

  function GT() {
    if (studentList) {
      return <GroupTab studentList={studentList} />;
    } else {
      return <div></div>;
    }
  }

  useEffect(() => {
    getStudentInfo();
  }, []);
  return (
    <div>
      <GT />
      <Button
        onClick={() => {
          getStudentInfo();
        }}
      >
        {" "}
        Refresh{" "}
      </Button>
    </div>
  );
}
