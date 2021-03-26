import React from 'react'
import styles from "./Inventory.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Parts from './Components/Parts'
import Tools from './Components/Tools'


export default function Inventory() {

    return (
        <div className={styles.Body}>
            <h1>Inventory Page</h1>
            <Tabs>
                <Tab eventKey="buy" title="Parts" >
                    <Parts />
                </Tab >
                <Tab eventKey="rent" title="Tools">
                    <Tools />
                </Tab>
            </Tabs>

        </div >
    )
}
