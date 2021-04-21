import React from "react";
import Axios from "axios";
import styles from "./Search.module.css";
import SearchID from './SearchID'
import SearchName from './SearchName'

export default function Search(props) {

  function search(newurl, request) {
    console.log(request)
    Axios.get(props.url + newurl + request).then((response) => {
      response.data.length > 0
        ? props.setList(response.data)
        : props.refreshList();
    });

  }

  return (
    <div className={styles.parent}>
      <SearchID search={search} />
      <SearchName search={search} />
    </div>
  );
}
