import React from 'react'
import styles from "./Inventory.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Parts from './Components/PartItems/Parts'
import Tools from './Components/ToolItems/Tools'


export default function Inventory() {

    return (
        <div className={styles.Body}>
            <h1>Inventory Page</h1>
            {/* tabs for tools and parts */}
            <Tabs>
                <Tab eventKey="buy" title="Parts" >
                    <Parts styles={styles} />
                </Tab >
                <Tab eventKey="rent" title="Tools">
                    <Tools styles={styles} />
                </Tab>
            </Tabs>

        </div >
    )
}
