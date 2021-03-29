import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./ToolTable/Table";
import Search from './Search/Search'
import SingleModal from './InsertTool/SingleModal'

export default function Tools() {
    const url = "http://localhost:5000/tools";
    const [list, setList] = useState([]);
    function refreshList() {
        axios.get(url).then((response) => {
            setList(response.data);
        });
    }

    function removePart(part_id) {
        console.log(part_id)
        //  axios.post(url+"/delete?id="+part_id).then((response) => { });
    }

    function modifyPart(part_id) {
        console.log(part_id)
        //  axios.post(url+"/modify?id="+part_id).then((response) => { });
    }

    function addTool(row) {
        //Axios.post('http://localhost:5000/inventory/insert', row)
        console.log(row)
    }

    useEffect(() => {
        refreshList();
    }, []);

    return (
        <div>
            <h2>Part List</h2>
            <Button onClick={() => refreshList()}>Refresh</Button>
            <SingleModal addPart={addTool} />
            <Search url={url} refreshList={refreshList} setList={setList} />

            <DataTable
                list={list}
                refreshList={refreshList}
                removePart={removePart}
                modifyPart={modifyPart}

            />
        </div>
    )
}
