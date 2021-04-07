/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./ToolTable/Table";
import Search from "./Search/Search";
import SingleModal from "./InsertTool/SingleModal";
import MultiModal from "./InsertTool/MultiModal";
import styles from "./tools.module.css";

export default function Tools() {
  // const url = "http://localhost:5000/tools";
  const serverSite = process.env.REACT_APP_SERVER_SITE;
  const inventoryRoute = process.env.REACT_APP_INVENTORY;
  const toolRoute = process.env.REACT_APP_RENT;

  const url = serverSite + inventoryRoute + toolRoute;
  const [list, setList] = useState([]);

  const [showSingle, setShowSingle] = useState(false);
  const [showMulti, setShowMulti] = useState(false);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function removePart(part_id) {
    console.log(part_id);
    //  axios.post(url+"/delete?id="+part_id).then((response) => { });
  }

  function modifyPart(new_tool) {
    console.log(new_tool);
    axios.post(url + "/modify" + new_tool).then((response) => {});
  }

  function addTool(row) {
    axios.post(url + "/insert", row);
  }

  function addTools(sheet) {
    axios.post(url + "/upload", sheet);
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h2>Tool List</h2>

      <SingleModal
        addTool={addTool}
        show={showSingle}
        setShow={setShowSingle}
      />
      <MultiModal addTools={addTools} show={showMulti} setShow={setShowMulti} />
      <Search url={url} refreshList={refreshList} setList={setList} />

      <DataTable
        list={list}
        refreshList={refreshList}
        removePart={removePart}
        modifyPart={modifyPart}
      />
      <div className={styles.Parent}>
        <Button className={styles.Container} onClick={() => refreshList()}>
          Refresh
        </Button>
        <Button
          className={styles.Container}
          variant="primary"
          onClick={() => {
            setShowMulti(true);
          }}
        >
          Insert Sheet
        </Button>
        <Button
          className={styles.Container}
          variant="primary"
          onClick={() => {
            setShowSingle(true);
          }}
        >
          Insert One
        </Button>
      </div>
    </div>
  );
}
