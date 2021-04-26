import React from 'react'

export default function Info(props) {

    return (
        <div>
            <input placeholder="net_id" type="text" value={props.groupInfo.net_id} onChange={e => props.setgroupInfo(prev => ({ ...prev, net_id: e.target.value }))} />
            <input placeholder="group_id" type="number" onFocus={(e) => e.target.select()} value={props.groupInfo.group_id} onChange={e => props.setgroupInfo(prev => ({ ...prev, group_id: e.target.value }))} />
            {!props.valid() && <h4>Input valid net_id and group_id</h4>}
        </div>
    )
}
