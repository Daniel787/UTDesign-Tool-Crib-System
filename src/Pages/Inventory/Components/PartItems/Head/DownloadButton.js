import React from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import DownloadJS from "downloadjs";
import styles from "../parts.module.css";


function Btn(props) {
  function downloadAxiosCSV() {
    const today = new Date()
    Axios.get(props.url).then((response) => {
      var objArray = JSON.stringify(response.data)
      var array = JSON.parse(objArray)
      var str = 'part_id,name,quantity_available,current_cost\r\n';
      for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
          if (line !== '') line += ','
          line += array[i][index];
        }
        str += (line + '\r\n');
      }
      DownloadJS(
        str, "Parts_On_" +
        today.getFullYear().toString() + "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) + "-" +
        ("0" + today.getDate()).slice(-2) +
      ".csv"
      );
    });
  }
  return (
    <Button
      className={styles.Container}
      onClick={() => {
        downloadAxiosCSV();
      }}
    >
      {" "}
      Download{" "}
    </Button>
  );
}

export default Btn;
