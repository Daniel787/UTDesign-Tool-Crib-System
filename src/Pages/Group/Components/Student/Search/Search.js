import React from "react";
import Axios from "axios";
import styles from "./Search.module.css";
import SearchID from "./SearchID";
import SearchName from "./SearchName";

export default function Search(props) {
  // post search request based on type
  function search(newurl, request) {
    console.log(props.url + newurl + request);
    Axios.get(props.url + newurl + request).then((response) => {
      // if search exists filter otherwise refresh
      response.data.length > 0
        ? props.setList(response.data)
        : Axios.get(props.url + "?json=true").then((response) => {
          props.setList(response.data);
        });
    });
  }

  return (
    <div className={styles.parent}>
      <SearchID search={search} />
      <SearchName search={search} />
    </div>
  );
}
