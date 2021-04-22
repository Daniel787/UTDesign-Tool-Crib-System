import React from 'react'
import AddHold from './AddHold/AddHold'
import RefreshList from "./Refresh_List/RefreshList";

export default function Head(props) {
    return (
        <div>
            <AddHold styles={props.styles} url={props.url} />
            <RefreshList styles={props.styles} refreshList={props.refreshList} />
        </div>
    )
}
