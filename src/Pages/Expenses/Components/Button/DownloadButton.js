import React from "react";
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
    Axios.get(props.url + obj).then((response) => {
      DownloadJS(
        response.data, props.display +
        props.startDate.getFullYear().toString() + "-" +
        ("0" + (props.startDate.getMonth() + 1)).slice(-2) + "-" +
        ("0" + props.startDate.getDate()).slice(-2) +
        "_TO_" +
        props.endDate.getFullYear().toString() + "-" +
        ("0" + (props.endDate.getMonth() + 1)).slice(-2) + "-" +
        ("0" + props.endDate.getDate()).slice(-2) +
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
      Download
    </Button>
  );
}

export default Btn;
