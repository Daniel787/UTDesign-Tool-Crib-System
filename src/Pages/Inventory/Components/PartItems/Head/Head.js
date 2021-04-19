import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Search from "./Search/Search";
import styles from "../parts.module.css";
import Insert from './Insert/Insert'

//props: refreshList setList
export default function Head(props) {
    const [showSingle, setShowSingle] = useState(false);
    const [showMulti, setShowMulti] = useState(false);

    return (
        <div>
            <Insert
                url={props.url}
                showSingle={showSingle} setShowSingle={setShowSingle}
                showMulti={showMulti} setShowMulti={setShowMulti} />
            <div className={styles.Parent}>
                <Button
                    className={styles.Container}
                    onClick={() => props.refreshList()} >
                    Refresh
                </Button>
                <Button
                    variant="primary"
                    className={styles.Container}
                    onClick={() => {
                        setShowMulti(true);
                    }}>
                    Insert Sheet
                </Button>
                <Button
                    variant="primary"
                    className={styles.Container}
                    onClick={() => {
                        setShowSingle(true);
                    }}>
                    Insert One
                </Button>
            </div>
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
