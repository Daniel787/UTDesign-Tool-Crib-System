import React from "react";

export default function GroupInfo(props) {
    return(
        <tbody> 
        <tr> 
            <td> props.item.name </td>
            <td> props.item.net_id </td> 
            <td> props.item.utd_id </td>
            <td> props.item.email </td> 
            <td> props.item.hold </td> 
        </tr>
        </tbody> 
        )
}