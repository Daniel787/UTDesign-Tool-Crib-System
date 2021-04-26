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

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <Head url={url} refreshList={refreshList} setList={setList} styles={props.styles} />
      <DataTable url={url} list={list} refreshList={refreshList} />
    </div>
  );
}
