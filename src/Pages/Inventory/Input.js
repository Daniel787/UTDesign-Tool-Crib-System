import React, { useState } from 'react'
import Axios from 'axios'

export default function Input(props) {
    const [row, setRow] = useState({ part_id: 0, name: '', quantity_available: 0, cost: 0 })
    function submitRow() {
        //Axios.post('http://localhost:5000/inventory/insert', row)
        const prevList = [...props.list]
        prevList.push(row)
        props.setList(prevList)
        setRow({ part_id: 0, name: '', quantity: 0, cost: 0 })
    }

    React.useEffect(() => {
        console.log(row)
    }, [row])
    return (
        <div className="insert">
            <h3>Insert</h3>
            <div>
                <label>Part ID:</label> <input type="number" value={row.part_id} onChange={e => setRow(prev => ({ ...prev, part_id: parseInt(e.target.value) }))}></input>
            </div>
            <div>
                <label>Name:</label> <input type="text" value={row.name} onChange={e => setRow(prev => ({ ...prev, name: e.target.value }))}></input>
            </div>
            <div>
                <label>Quantity Available:</label> <input type="number" value={row.quantity_available} onChange={e => setRow(prev => ({ ...prev, quantity_available: parseInt(e.target.value) }))}></input>
            </div>
            <div>
                <label>Cost:</label> <input type="number" value={row.current_cost} onChange={e => setRow(prev => ({ ...prev, current_cost: parseFloat(e.target.value) }))}></input>
            </div>
            <button disabled={!(row.part_id > 0) || row.name.length === 0 || !(row.quantity_available > 0) || !(row.current_cost > 0)} onClick={submitRow}>Insert</button>
        </div>
    )
}
