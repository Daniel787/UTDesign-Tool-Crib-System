import React, { useState } from "react";
import Axios from "axios";
import styles from "./Search.module.css";
import { Button } from "react-bootstrap";

export default function Search(props) {
  const [idsearch, setIdsearch] = useState(0);
  const [namesearch, setNamesearch] = useState("");
  function search(newurl, request) {
    console.log(request);
    Axios.get(props.url + newurl + request).then((response) => {
      console.log(response.data);
      response.data.length > 0
        ? props.setList(response.data)
        : props.refreshList();
    });
    setIdsearch(0);
    setNamesearch("");
  }

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {/*  <label>By Part ID: </label>{" "} */}
        <input
          type="number"
          placeholder="By Part ID"
          value={idsearch}
          onChange={(e) => setIdsearch(parseInt(e.target.value))}
        ></input>
        <Button
          disabled={idsearch === 0 || !idsearch}
          onClick={() => search("/search?id=", idsearch)}
        >
          Search
        </Button>
      </div>
      <div className={styles.container}>
        {/* <label>By Name: </label>{" "} */}
        <input
          type="text"
          placeholder="By Name"
          value={namesearch}
          onChange={(e) => setNamesearch(e.target.value)}
        ></input>
        <Button
          disabled={namesearch.length === 0}
          onClick={() => search("/searchname?name=", namesearch)}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
