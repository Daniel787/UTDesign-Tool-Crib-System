import React, { useState } from "react";
import axios from "axios";
import SingleModal from "./SingleModal";
import MultiModal from "./MultiModal";
import ErrorSheet from './ErrorInputs/ErrorSheet'

export default function Insert(props) {
    const [status, setStatus] = useState(null)

    function modifyTool(new_tool) {
        console.log(new_tool);
        axios.post(props.url + "/modify", new_tool).then((response) => { });
    }

    function addTool(row) {
        axios.post(props.url + "/insert", row).then(response => {
            if (response.data.message === "SUCCESS") {
                setStatus(null)
            }
            else {
                setStatus(response.data)
            }
        });
    }

    function addTools(sheet) {
        console.log(sheet)
        axios.post(props.url + "/upload", sheet).then(response => {
            console.log(response.data)
            if (response.data === "SUCCESS") {
                setStatus(null)
            }
            else {
                setStatus(response.data)
            }
        });
    }
    return (
        <div>
            <ErrorSheet status={status} setStatus={setStatus} addTools={addTools} modifyTool={modifyTool} />
            <SingleModal addTool={addTool} show={props.showSingle} setShow={props.setShowSingle} />
            <MultiModal addTools={addTools} show={props.showMulti} setShow={props.setShowMulti} />
        </div>
    )
}
