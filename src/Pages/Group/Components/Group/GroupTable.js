import React from "react";
import { Table } from "react-bootstrap";
import GroupInfo from "./GroupInfo";
import AddMember from "./AddMember";
import AddGroup from "./AddGroup";
import Search from "./Search/Search";

// Group Table function that shows each row as a Group Info object.
export default function GroupTable(props) {
  const host = process.env.REACT_APP_SERVER_SITE;
  const oldURL = process.env.REACT_APP_GROUP_MEMBERS;
  const modifiedRoute = oldURL.replace(/^"(.*)"$/, "$1");
  const url = host + modifiedRoute;
  return (
    <React.Fragment>
      <Search url={url} setList={props.setList} />
      <Table striped bordered hover>
        <thead>
          <tr key="header2">
            <td> Group ID </td>
            <td> Group Name </td>
            <td> Group Sponsor </td>
            <td> Modify </td>
            <td> Students </td>
          </tr>
        </thead>
        <tbody></tbody>
        {props.list.map((item, i) => {
          return <GroupInfo key={i} item={item} />;
        })}
      </Table>
      <AddMember />
      <AddGroup />
    </React.Fragment>
  );
}
