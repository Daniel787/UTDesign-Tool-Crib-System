import React, { useState } from "react";
import axios from "axios";
import InsertModal from "./InsertModal";
import Error from "./ErrorModal/Error";

export default function Insert(props) {
  const [show, setShow] = useState(false);
  const host = process.env.REACT_APP_SERVER_SITE;
  const route = process.env.REACT_APP_GROUP_INSERT_SHEET;
  // CREATE_REACT_APP was including strings around the route for some reason. Needs to work
  const modifiedRoute = route.replace(/^"(.*)"$/, "$1");
  const url = host + modifiedRoute;

  function addGroups(sheet) {
    console.log(sheet);
    axios.post(url, sheet).then((response) => {
      if (response.data.message === "SUCCESS") {
        props.setStatus(null);
        window.location.reload();
      } else {
        console.log(response.data);
        props.setStatus(response.data);
      }
    });
  }
  return (
    <React.Fragment>
      <Error
        status={props.status}
        setStatus={props.setStatus}
        addGroups={addGroups}
      />
      <InsertModal addGroups={addGroups} show={show} setShow={setShow} />
    </React.Fragment>
  );
}
