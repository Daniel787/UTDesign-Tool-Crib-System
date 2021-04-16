/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./ToolTable/Table";
import Search from "./Search/Search";
import SingleModal from "./InsertTool/SingleModal";
import MultiModal from "./InsertTool/MultiModal";
import ErrorSheet from './InsertTool/ErrorSheet'
import styles from "./tools.module.css";

export default function Tools() {
  // const url = "http://localhost:5000/tools";
  const serverSite = process.env.REACT_APP_SERVER_SITE;
  const inventoryRoute = process.env.REACT_APP_INVENTORY;
  const toolRoute = process.env.REACT_APP_RENT;

  const url = serverSite + inventoryRoute + toolRoute;
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(null)
  const [showSingle, setShowSingle] = useState(false);
  const [showMulti, setShowMulti] = useState(false);

  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function removePart(tool_id) {
    console.log(tool_id);
    axios.post(url + "/delete?tool_id=" + tool_id).then((response) => { });
  }

  function modifyTool(new_tool) {
    console.log(new_tool);
    axios.post(url + "/modify", new_tool).then((response) => { });
  }

  function addTool(row) {
    axios.post(url + "/insert", row).then(response => {
      if (response.data === "SUCCESS") {
        setStatus(null)
      }
      else {
        setStatus(response.data)
      }

    });
  }

  function addTools(sheet) {
    console.log(sheet)
    axios.post(url + "/upload", sheet).then(response => {
      console.log(response.data)
      if (response.data === "SUCCESS") {
        setStatus(null)
      }
      else {
        setStatus(response.data)
      }

    });
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <ErrorSheet status={status} setStatus={setStatus} addTools={addTools} modifyTool={modifyTool} />
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
        modifyTool={modifyTool}
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
