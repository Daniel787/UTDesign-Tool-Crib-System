import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./ToolTable/Table";
import Search from "./Search/Search";
import SingleModal from "./InsertTool/SingleModal";
import MultiModal from "./InsertTool/MultiModal";

export default function Tools() {
  // const url = "http://localhost:5000/tools";
  const serverSite = process.env.REACT_APP_SERVER_SITE;
  const inventoryRoute = process.env.REACT_APP_INVENTORY;
  const toolRoute = process.env.REACT_APP_RENT;

  const url = serverSite + inventoryRoute + toolRoute;
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

  function modifyPart(new_tool) {
    console.log(new_tool);
    axios.post(url + "/modify" + new_tool).then((response) => { });
  }

  function addTool(row) {
    axios.post(url + '/insert', row)
  }

  function addTools(sheet) {
    axios.post(url + '/upload', sheet)
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h2>Tool List</h2>
      <Button onClick={() => refreshList()}>Refresh</Button>
      <SingleModal addPart={addTool} />
      <MultiModal addTools={addTools} />
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
