import React from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import DownloadJS from "downloadjs";
import styles from "../tools.module.css";

function Btn(props) {
  function downloadAxiosCSV() {
    const today = new Date()
    Axios.get(props.url).then((response) => {
      var objArray = JSON.stringify(response.data)
      var array = JSON.parse(objArray)
      var str = 'tool_id,name\r\n';
      for (var i = 0; i < array.length; i++) {
        var line = '';
        var j = 0
        for (var index in array[i]) {
          if (j > 1) break;
          if (line !== '') line += ','
          line += array[i][index];
          j++
        }
        str += (line + '\r\n');
      }
      DownloadJS(
        str, "Tools_On_" +
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
