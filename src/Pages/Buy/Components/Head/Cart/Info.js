import React from 'react'
import { Form } from "react-bootstrap";

export default function Info(props) {
    // net id and group must exist before input
    return (
        <div>
            {/* net id input */}
            <Form.Group>
                <Form.Label>Net ID</Form.Label>
                <Form.Control
                    type="text"
                    value={props.groupInfo.net_id}
                    placeholder="net_id"
                    onFocus={(e) => e.target.select()}
                    onChange={e => props.setgroupInfo(prev => ({ ...prev, net_id: e.target.value }))}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Group ID</Form.Label>
                <Form.Control
                    type="number"
                    value={props.groupInfo.group_id}
                    placeholder="net_id"
                    onFocus={(e) => e.target.select()}
                    onChange={e => props.setgroupInfo(prev => ({ ...prev, group_id: e.target.value }))}
                />
            </Form.Group>
            {!props.validInfo() && <h4>Input valid Net ID and Group ID</h4>}
        </div>
    )
}
