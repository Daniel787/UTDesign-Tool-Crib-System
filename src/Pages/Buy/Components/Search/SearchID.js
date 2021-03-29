import React, { useState } from 'react'
import styles from "./Search.module.css";
import { Button } from "react-bootstrap";

export default function SearchID(props) {
    const [idsearch, setIdsearch] = useState(0);

    return (
        <div className={styles.container}>
            {/*  <label>By Part ID: </label>{" "} */}
            <input
                type="number"
                placeholder="By Part ID"
                value={idsearch}
                onChange={(e) => setIdsearch(e.target.value)}
            ></input>
            <Button
                disabled={idsearch === 0 || !idsearch || idsearch % 1 > 0}
                onClick={() => {
                    props.search("/search?id=", idsearch);
                    setIdsearch(0)

                }}
            >
                Search
        </Button>
        </div>
    )
}
