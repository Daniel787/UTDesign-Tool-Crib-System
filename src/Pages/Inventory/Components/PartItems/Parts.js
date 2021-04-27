/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./PartTable/Table";
import Head from './Head/Head'

export default function Parts(props) {
  const host = process.env.REACT_APP_SERVER_SITE;
  const inv = process.env.REACT_APP_INVENTORY;
  const parts = process.env.REACT_APP_PARTS;
  const url = host + inv + parts;

  const [list, setList] = useState([]);

  // grabs items to list
  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  // grabs list on first render
  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      {/* options */}
      <Head url={url} refreshList={refreshList} setList={setList} styles={props.styles} />
      {/* table list */}
      <DataTable url={url} list={list} refreshList={refreshList} />
    </div>
  );
}
