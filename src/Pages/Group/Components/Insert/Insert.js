import React, { useState } from "react";
import axios from "axios";
import InsertModal from './InsertModal'

export default function Insert(props) {
    const [status, setStatus] = useState(null)
    const [show, setShow] = useState(false)
    const host = process.env.REACT_APP_SERVER_SITE;
    const route = process.env.REACT_APP_GROUP_INSERT_SHEET;
    // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
    const modifiedRoute = route.replace(/^"(.*)"$/, "$1");
    const url = host + modifiedRoute;

    function addGroups(sheet) {
        console.log(url)
        console.log(sheet)
        axios.post(url, sheet).then(response => {
            if (response.data.message === "SUCCESS") {
                setStatus(null)
                window.location.reload()
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
