import React from 'react'
import AddHold from './AddHold/AddHold'
import RefreshList from "./Refresh_List/RefreshList";

export default function Head(props) {
    /* button options */
    return (
        <div className={props.styles.Parent}>
            <AddHold styles={props.styles} url={props.url} />
            <RefreshList styles={props.styles} refreshList={props.refreshList} />
        </div>
    )
}
