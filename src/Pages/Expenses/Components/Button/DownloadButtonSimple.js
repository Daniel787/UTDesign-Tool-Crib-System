import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import DownloadJS from "downloadjs";

function Btn(props) {
  function downloadAxiosCSV() {
    // Convert to correct format for date
    let obj =
      "?start=" +
      props.startDate.getFullYear().toString() +
      ("0" + (props.startDate.getMonth() + 1)).slice(-2) +
      ("0" + props.startDate.getDate()).slice(-2) +
      "&end=" +
      props.endDate.getFullYear().toString() +
      ("0" + (props.endDate.getMonth() + 1)).slice(-2) +
      ("0" + props.endDate.getDate()).slice(-2) +
      "&csv=true";
    console.log(obj);
    Axios.get(props.url + obj).then((response) => {
      DownloadJS(
        response.data,
        response.headers.Date.getFullYear().toString() +
          props.startDate.getFullYear().toString() +
          "_" +
          props.endDate.getFullYear().toString() +
          ".csv"
      );
    });
  }
  return (
    <Button
      onClick={() => {
        downloadAxiosCSV();
      }}
    >
      {" "}
      {props.display}{" "}
    </Button>
  );
}

export default Btn;
