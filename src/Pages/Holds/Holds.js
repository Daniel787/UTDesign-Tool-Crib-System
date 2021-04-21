/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Holds.module.css";
import DataTable from "./Components/Table/Table";
import AddHold from './Components/AddHold/AddHold'
import RefreshList from "./Components/Refresh_List/RefreshList";

export default function Holds() {
  // const url = "http://localhost:5000/student/holds";
  const host = process.env.REACT_APP_SERVER_SITE;
  const StudentRoute = process.env.REACT_APP_STUDENTS;
  const HoldRoute = process.env.REACT_APP_HOLDS;
  const url = host + StudentRoute;
  const [list, setList] = useState([]);

  function refreshList() {
    axios.get(url + HoldRoute).then((response) => {
      setList(response.data);
      console.log(response.data)
    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className={styles.Body}>
      <h1>Holds Page</h1>
      {/* <AddHold url={url} /> */}
      <RefreshList styles={styles} refreshList={refreshList} />
      <DataTable list={list} refreshList={refreshList} url={url} />

    </div>
  );
}
