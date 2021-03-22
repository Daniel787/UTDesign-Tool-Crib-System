import React, { useState } from 'react'
import Axios from "axios";

export default function Search(props) {
    const [idsearch, setIdsearch] = useState(0);
    const [namesearch, setNamesearch] = useState("");
    function search(newurl, request) {
        Axios.get(props.url + newurl + request).then((response) => {
            response.data.length > 0 ? props.setList(response.data) : props.refreshList();
        });
        setIdsearch(0);
        setNamesearch("");
    }

    return (
        <div>
            <div>
                <label>By Part ID:</label>{" "}
                <input
                    type="number"
                    value={idsearch}
                    onChange={(e) => setIdsearch(parseInt(e.target.value))}
                ></input>
                <button
                    disabled={idsearch === 0 || !idsearch}
                    onClick={() => search("/searchid?id=", idsearch)}
                >
                    Search
              </button>
            </div>
            <div >
                <label>By Name:</label>{" "}
                <input
                    type="text"
                    value={namesearch}
                    onChange={(e) => setNamesearch(e.target.value)}
                ></input>
                <button
                    disabled={namesearch.length === 0}
                    onClick={() => search("/searchname?id=", namesearch)}
                >
                    Search
              </button>
            </div>
        </div>
    )
}
