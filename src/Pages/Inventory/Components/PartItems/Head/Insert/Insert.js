import React, { useState } from "react";
import axios from "axios";
import SingleModal from "./SingleModal";
import MultiModal from "./MultiModal";
import ErrorSheet from './ErrorInputs/ErrorSheet'

export default function Insert(props) {
    const [status, setStatus] = useState(null)

    function addPart(row) {
        axios.post(props.url + "/insert", row).then(response => {
            if (response.data === "SUCCESS") {
                setStatus(null)
            }
            else {
                setStatus(response.data)
            }
        });
    }

    function addParts(sheet) {
        axios.post(props.url + "/upload", sheet).then(response => {
            console.log(response.data)
            if (response.data.message === "SUCCESS") {
                setStatus(null)
            }
            else {
                setStatus(response.data)
            }

        });
    }

    function modifyPart(new_part) {
        axios.post(props.url + "/modify", new_part).then((response) => {
        });
    }

    return (
        <div>
            <ErrorSheet status={status} setStatus={setStatus} addParts={addParts} styles={props.styles} modifyPart={modifyPart} />
            <SingleModal addPart={addPart} show={props.showSingle} setShow={props.setShowSingle} />
            <MultiModal addParts={addParts} show={props.showMulti} setShow={props.setShowMulti} />
        </div>
    )
}
