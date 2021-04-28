import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Search from "./Search/Search";
import styles from "../tools.module.css";
import Insert from './Insert/Insert'

export default function Head(props) {
    const [showSingle, setShowSingle] = useState(false);
    const [showMulti, setShowMulti] = useState(false);
    return (
        <div>
            {/* Insertion modals */}
            <Insert
                url={props.url}
                styles={props.styles}
                showSingle={showSingle} setShowSingle={setShowSingle}
                showMulti={showMulti} setShowMulti={setShowMulti} />
            {/* button options */}
            <div className={styles.Parent}>
                {/* calls refresh list function */}
                <Button className={styles.Container} onClick={() => props.refreshList()} >
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
            {/* filters */}
            <Search url={props.url} refreshList={props.refreshList} setList={props.setList} />
        </div>
    )
}
