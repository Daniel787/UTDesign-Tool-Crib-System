import React, { useEffect, useState } from "react";
import styles from "./Expenses.module.css";
import Downloadbtn from "./Components/Button/DownloadButton.js";
import Axios from "axios";
import TableTab from "./Components/Tab/Tab.js";
export default function Expenses() {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const baseURL = process.env.REACT_APP_SERVER_SITE;
  const expenseURL = process.env.REACT_APP_EXPENSE;

  const simpleCSVURL = "/simple";
  const simpleDownload = baseURL + expenseURL + simpleCSVURL;

  const mediumCSVURL = "/medium";
  const mediumDownload = baseURL + expenseURL + mediumCSVURL;

  const fullCSVURL = "/full";
  const fullDownload = baseURL + expenseURL + fullCSVURL;

  function handleStart(event) {
    let d = new Date(event.target.value);
    setDateStart(d);
  }

  function handleEnd(event) {
    let d = new Date(event.target.value);
    setDateEnd(d);
  }

  function CondTable() {
    if (dateStart && dateEnd) {
      return (
        <TableTab
          simpleURL={simpleDownload}
          mediumURL={mediumDownload}
          fullURL={fullDownload}
          startDate={dateStart}
          endDate={dateEnd}
        />
      );
    } else {
      return <div> </div>;
    }
  }
  function CondButton(props) {
    if (dateStart && dateEnd) {
      return (
        <Downloadbtn
          url={simpleDownload}
          startDate={dateStart}
          endDate={dateEnd}
          display={props.type}
        />
      );
    } else return <div> </div>;
  }

  return (
    <div className={styles.Body}>
      <h1>Expenses Page</h1>
      <input type="date" name="date-start" onChange={handleStart} />
      <input type="date" name="date-end" onChange={handleEnd} /> {}
      <CondTable />
      <div>
        <CondButton type="Simple" />
        <CondButton type="Medium" />
        <CondButton type="Full" />
      </div>
    </div>
  );
}
