/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Holds.module.css";
import DataTable from "./Components/Table/Table";
import Head from './Components/Head/Head'

export default function Holds() {
  const host = process.env.REACT_APP_SERVER_SITE;
  const StudentRoute = process.env.REACT_APP_STUDENTS;
  const HoldRoute = process.env.REACT_APP_HOLDS;
  const url = host + StudentRoute;
  const [list, setList] = useState([]);

  // grabs items to list
  function refreshList() {
    axios.get(url + HoldRoute + "/withtools/json").then((response) => {
      setList(response.data);
    });
  }

  // grabs list on first render
  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className={styles.Body}>
      <h1>Holds Page</h1>
      {/* options */}
      <Head url={url} refreshList={refreshList} styles={styles} />
      {/* table list */}
      <DataTable list={list} refreshList={refreshList} url={url} styles={styles} />
    </div>
  );
}
