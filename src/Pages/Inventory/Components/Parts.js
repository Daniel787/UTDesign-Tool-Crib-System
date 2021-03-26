import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Button } from "react-bootstrap";
import DataTable from "./PartTable/Table";
import Search from './Search/Search'

export default function Parts() {
    const url = "http://localhost:5000/inventory";
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

    function modifyPart(part_id, quantity, price) {
        console.log(part_id + ' : ' + quantity + ' ' + price)
        //  axios.post(url+"/modify?id="+part_id).then((response) => { });
    }

    useEffect(() => {
        refreshList();
    }, []);

    return (
        <div>
            <h2>Part List</h2>
            <Button onClick={() => refreshList()}>Refresh</Button>
            <Search url={url} refreshList={refreshList} setList={setList} />
            <DataTable
                refreshList={refreshList}
                removePart={removePart}
                modifyPart={modifyPart}
                list={list}
            />
        </div>
    )
}
