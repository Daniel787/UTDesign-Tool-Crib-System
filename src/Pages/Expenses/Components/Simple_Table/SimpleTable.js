/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import DownloadButton from "../Button/DownloadButton"
import Row from "./Row";
import Axios from "axios";

function DataTable(props) {
  const [simpleList, setSimpleList] = useState(null);

  function GetSimpleJSON() {
    console.log(props.url);
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
      console.log(props.url + obj);
      Axios.get(props.url + obj).then((response) => {
        setSimpleList(response.data);
      });
    }
  }
  useEffect(() => {
    GetSimpleJSON();
  }, []);

  const head = ["Group ID", "Total"];
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
            {simpleList.map((item) => {
              return <Row key={item.group_id} item={item} />;
            })}
          </tbody>{" "}
        </Table>
        <DownloadButton url={props.url} display="Download" startDate={props.startDate} endDate={props.endDate}/>
      </div>
    );
  } else {
    return <div> </div>;
  }
}

export default DataTable;
