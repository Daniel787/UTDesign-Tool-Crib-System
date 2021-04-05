/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./PartTable/Table";
import Search from "./Search/Search";
import SingleModal from "./InsertPart/SingleModal";
import MultiModal from "./InsertPart/MultiModal";

export default function Parts() {
  // const url = "http://localhost:5000/inventory";
  const host = process.env.REACT_APP_SERVER_SITE;
  const inv = process.env.REACT_APP_INVENTORY;
  const parts = process.env.REACT_APP_PARTS;
  const url = host + inv + parts;

  const [showSingle, setShowSingle] = useState(false);
  const [showMulti, setShowMulti] = useState(false);

  const [list, setList] = useState([]);
  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function removePart(part_id) {
    console.log(part_id);
    //axios.post(url+"/delete?id="+part_id).then((response) => { });
  }

  function modifyPart(new_part) {
    console.log(new_part);
    axios.post(url + "/modify" + new_part).then((response) => {});
  }

  function addPart(row) {
    axios.post(url + "/insert", row);
  }

  function addParts(sheet) {
    axios.post(url + "/upload", sheet);
    console.log(sheet);
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h2>Part List</h2>

      <SingleModal
        addPart={addPart}
        show={showSingle}
        setShow={setShowSingle}
      />
      <MultiModal addParts={addParts} show={showMulti} setShow={setShowMulti} />
      <Search url={url} refreshList={refreshList} setList={setList} />
      <DataTable
        list={list}
        refreshList={refreshList}
        removePart={removePart}
        modifyPart={modifyPart}
      />
      <Button onClick={() => refreshList()}>Refresh</Button>
    </div>
  );
}
