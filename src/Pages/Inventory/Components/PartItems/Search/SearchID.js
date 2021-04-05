import React, { useState } from 'react'
import styles from "./Search.module.css";
import { Button } from "react-bootstrap";

export default function SearchID(props) {
    const [idsearch, setIdsearch] = useState(null);

    return (
        <div className={styles.container}>
            {/*  <label>By Part ID: </label>{" "} */}
            <input
                type="number"
                placeholder="By Part ID"
                value={idsearch ? idsearch : null}
                onChange={(e) => setIdsearch(e.target.value)}
                onFocus={e => e.target.select()}
            ></input>
            <Button
                disabled={idsearch === 0 || !idsearch || idsearch % 1 > 0}
                onClick={() => {
                    props.search("/search?part_id=", idsearch);
                }}
            >
                Search
            </Button>
        </div>
    )
}
