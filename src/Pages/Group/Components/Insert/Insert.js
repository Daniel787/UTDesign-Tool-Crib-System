import React, { useState } from "react";
import axios from "axios";
import InsertModal from './InsertModal'

export default function Insert(props) {
    const [status, setStatus] = useState(null)
    const [show, setShow] = useState(false)

    function addGroups(sheet) {
        axios.post(props.url + "/upload", sheet).then(response => {
            if (response.data.message === "SUCCESS") {
                setStatus(null)
                // window.location.reload()
            }
            else {
                setStatus(response.data)
            }
        });
    }
    return (
        <div>
            <InsertModal addGroups={addGroups} show={show} setShow={setShow} />
        </div>
    )
}
