/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Holds.module.css";
import DataTable from "./Components/Table/Table";
import RefreshList from "./Components/Refresh_List/RefreshList";

export default function Holds() {
  // const url = "http://localhost:5000/student/holds";
  const host = process.env.REACT_APP_SERVER_SITE;
  const StudentRoute = process.env.REACT_APP_STUDENTS;
  const HoldRoute = process.env.REACT_APP_HOLDS;
  const url = host + StudentRoute + HoldRoute;
  console.log(url);
  const [list, setList] = useState([]);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
      console.log(response.data)
    });
  }

  function removeHold(id) {
    console.log(id)
  }
  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className={styles.Body}>
      <h1>Holds Page</h1>
      <DataTable list={list} refreshList={refreshList} removeHold={removeHold} />
      <RefreshList styles={styles} refreshList={refreshList} />
    </div>
  );
}
