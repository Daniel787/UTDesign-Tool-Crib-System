import React, { useState, useEffect } from "react";
import Axios from "axios";
import Input from './Input'

export default function ItemList(props) {
  const [idsearch, setIdsearch] = useState(0);
  const [namesearch, setNamesearch] = useState("");
  const url = "http://localhost:5000/inventory";
  const [list, setList] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  function refreshList() {
    Axios.get(url).then((response) => {
      setList(response.data);
    });
  }

  function search(newurl, request) {
    Axios.get(url + newurl + request).then((response) => {
      response.data.length > 0 ? setList(response.data) : refreshList();
    });
    setIdsearch(0);
    setNamesearch("");
  }

  return (
    <div >
      <div>
        <label>By Part ID:</label>{" "}
        <input
          type="number"
          value={idsearch}
          onChange={(e) => setIdsearch(parseInt(e.target.value))}
        />
        <button
          disabled={idsearch === 0 || !idsearch}
          onClick={() => search("/searchid?id=", idsearch)}
        >Search</button>
      </div>
      <div>
        <label>By Name:</label>{" "}
        <input
          type="text"
          value={namesearch}
          onChange={(e) => setNamesearch(e.target.value)}
        />
        <button
          disabled={namesearch.length === 0}
          onClick={() => search("/searchname?id=", namesearch)}
        >Search</button>
      </div>
      <Input list={list} setList={setList} />
      <button onClick={refreshList}>Refresh List</button>
      {list.map((el, i) => {
        return (
          <div key={i}>
            <h3>{el.name}</h3>
            <label> ID:</label> {el.part_id} <br />
            <label>Quantity:</label> {el.quantity_available} <br />
            <label>Price:</label> ${el.current_cost}
          </div>
        );
      })}
      <button onClick={refreshList}>Refresh List</button>
    </div>
  )
}
