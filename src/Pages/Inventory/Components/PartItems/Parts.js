/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./PartTable/Table";
import Search from "./Search/Search";
import SingleModal from "./InsertPart/SingleModal";
import MultiModal from "./InsertPart/MultiModal";
import styles from "./parts.module.css";
import ErrorSheet from './InsertPart/ErrorSheet'

export default function Parts() {
  // const url = "http://localhost:5000/inventory";
  const host = process.env.REACT_APP_SERVER_SITE;
  const inv = process.env.REACT_APP_INVENTORY;
  const parts = process.env.REACT_APP_PARTS;
  const url = host + inv + parts;

  const [showSingle, setShowSingle] = useState(false);
  const [showMulti, setShowMulti] = useState(false);
  const [status, setStatus] = useState(null)

  const [list, setList] = useState([]);
  function refreshList() {
    axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function removePart(part_id) {
    axios.post(url + "/delete?part_id=" + part_id).then((response) => { });
  }

  function modifyPart(new_part) {
    axios.post(url + "/modify", new_part).then((response) => {

    });
  }

  function addPart(row) {
    axios.post(url + "/insert", row);
  }

  function addParts(sheet) {
    axios.post(url + "/upload", sheet).then(response => {
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
      <ErrorSheet status={status} setStatus={setStatus} addParts={addParts} modifyPart={modifyPart} />
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
      <div className={styles.Parent}>
        <Button className={styles.Container} onClick={() => refreshList()}>
          Refresh
        </Button>
        <Button
          variant="primary"
          className={styles.Container}
          onClick={() => {
            setShowMulti(true);
          }}
        >
          Insert Sheet
        </Button>
        <Button
          variant="primary"
          className={styles.Container}
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
