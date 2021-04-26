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

  function refreshList() {
    axios.get(url + HoldRoute + "/withtools/json").then((response) => {
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
      <Head url={url} refreshList={refreshList} styles={styles} />
      <DataTable list={list} refreshList={refreshList} url={url} styles={styles} />
    </div>
  );
}
