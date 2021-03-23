import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";
import downloadjs from "downloadjs";

function CSVDownload() {
  const url = "http://localhost:5000/expense/full";

  function getData() {
    Axios.get(url).then((response) => {
      downloadjs(response.data, "data.csv");
    });
  }
  return (
    <Button
      onClick={() => {
        getData();
      }}
    >
      {" "}
      Download{" "}
    </Button>
  );
}

export default CSVDownload;
