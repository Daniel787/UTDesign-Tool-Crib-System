/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import DownloadButton from "../Button/DownloadButton";
import Row from "./Row";
import Axios from "axios";

function DataTable(props) {
  const [simpleList, setSimpleList] = useState(null);

  function GetSimpleJSON() {
    if (props.startDate & props.endDate) {
      let obj =
        "?start=" +
        props.startDate.getFullYear().toString() +
        ("0" + (props.startDate.getMonth() + 1)).slice(-2) +
        ("0" + props.startDate.getDate()).slice(-2) +
        "&end=" +
        props.endDate.getFullYear().toString() +
        ("0" + (props.endDate.getMonth() + 1)).slice(-2) +
        ("0" + props.endDate.getDate()).slice(-2) +
        "&csv=false";
      Axios.get(props.url + obj).then((response) => {
        setSimpleList(response.data);
      });
    }
  }
  useEffect(() => {
    GetSimpleJSON();
  }, []);

  const head = [
    "Tool ID",
    "Name",
    "Number of rentals",
    "Number of unique renting groups",
    "Assigned hours",
    "Actual hours without overdue",
    "Overdue hours",
    "Total actual hours",
  ];
  if (simpleList) {
    return (
      <div>
        <Table responsive hover>
          <thead>
            <tr>
              {head.map((el, i) => {
                return <th key={i}>{el}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {simpleList.map((item, i) => {
              return <Row key={i} item={item} />;
            })}
          </tbody>
        </Table>
        <DownloadButton
          url={props.url}
          display="Download"
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </div>
    );
  } else {
    return <div> </div>;
  }
}

export default DataTable;
