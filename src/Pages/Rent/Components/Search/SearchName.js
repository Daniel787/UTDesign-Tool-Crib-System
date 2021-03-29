import React, { useState } from 'react'
import styles from "./Search.module.css";
import { Button } from "react-bootstrap";

export default function SearchName(props) {
    const [namesearch, setNamesearch] = useState("");
    return (
        <div className={styles.container}>
            {/* <label>By Name: </label>{" "} */}
            <input
                type="text"
                placeholder="By Name"
                value={namesearch}
                onChange={(e) => setNamesearch(e.target.value)}
            ></input>
            <Button
                disabled={namesearch.length === 0}
                onClick={() => {
                    props.search("/searchname?name=", namesearch);
                    setNamesearch("")
                }}
            >
                Search
            </Button>
        </div>
    )
}
