import React from 'react'

export default function Info(props) {
    function valid() {
        return props.groupInfo.net_id.length === 9 && (props.groupInfo.group_id > 0 && props.groupInfo.group_id % 1 === 0)
    }
    return (
        <div>
            <input placeholder="net_id" type="text" value={props.groupInfo.net_id} onChange={e => props.setgroupInfo(prev => ({ ...prev, net_id: e.target.value }))} />
            <input placeholder="group_id" type="number" value={props.groupInfo.group_id} onChange={e => props.setgroupInfo(prev => ({ ...prev, group_id: e.target.value }))} />
            {!valid() && <h4>Input valid net_id and group_id</h4>}
        </div>
    )
}
