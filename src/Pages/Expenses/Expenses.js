import React, { useState } from "react";
import styles from "./Expenses.module.css";
import Downloadbtn from "./Components/Button/DownloadButtonSimple.js";
export default function Expenses() {
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const baseURL = process.env.REACT_APP_SERVER_SITE;
  const expenseURL = process.env.REACT_APP_EXPENSE;

  const simpleCSVURL = "/simple";
  const simpleDownload = baseURL + expenseURL + simpleCSVURL;

  function handleStart(event) {
    let d = new Date(event.target.value);
    setDateStart(d);
  }

  function handleEnd(event) {
    let d = new Date(event.target.value);
    setDateEnd(d);
  }
  return (
    <div className={styles.Body}>
      <h1>Expenses Page</h1>

      <input type="date" name="date-start" onChange={handleStart} />
      <input type="date" name="date-end" onChange={handleEnd} />
      <div>
        <Downloadbtn
          url={simpleDownload}
          startDate={dateStart}
          endDate={dateEnd}
          display="Simple"
        />
        <Downloadbtn url="" display="Medium" />
        <Downloadbtn url="" display="Full" />
      </div>
    </div>
  );
}
