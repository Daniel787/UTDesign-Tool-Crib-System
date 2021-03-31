import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./PartTable/Table";
import Search from "../Search/Search";
import SingleModal from "./InsertPart/SingleModal";
import MultiModal from "./InsertPart/MultiModal";

export default function Parts() {
  // const url = "http://localhost:5000/inventory";
  const host = process.env.REACT_APP_SERVER_SITE;
  const port = process.env.REACT_APP_INVENTORY;
  const port2 = process.env.REACT_APP_PARTS;
  const url = host + port + port2;
  const [list, setList] = useState([]);
  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function removePart(part_id) {
    console.log(part_id);
    //  axios.post(url+"/delete?id="+part_id).then((response) => { });
  }

  function modifyPart(part_id, quantity, price, name) {
    console.log(part_id + " : " + quantity + " " + price);
    //  axios.post(url+"/modify?id="+part_id).then((response) => { });
  }

  function addPart(row) {
    //Axios.post('http://localhost:5000/inventory/insert', row)
    console.log(row);
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h2>Part List</h2>
      <Button onClick={() => refreshList()}>Refresh</Button>
      <SingleModal addPart={addPart} />
      <MultiModal />
      <Search url={url} refreshList={refreshList} setList={setList} />
      <DataTable
        list={list}
        refreshList={refreshList}
        removePart={removePart}
        modifyPart={modifyPart}
      />
    </div>
  );
}
