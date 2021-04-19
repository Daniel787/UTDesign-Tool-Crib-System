import React from "react";
import GroupInfo from "./GroupInfo";
import {Table} from "react-bootstrap";

export default function StudentInfo(props) {
  return (
    <tbody>
      <tr>
        <td> {props.item.student.name} </td>
        <td> {props.item.student.net_id} </td>
        <td> {props.item.student.utd_id} </td>
        <td> {props.item.student.email} </td>
        <td> {props.item.student.hold} </td>
      </tr>
          <tr>
            <td> Group ID </td>
            <td> Group Name </td>
            <td> Group Sponsor </td>
          </tr>
          {props.item.student.groups.map((el, i) => {
            return <GroupInfo key={i} item={el} />;
          })}
    </tbody>
  );
}
