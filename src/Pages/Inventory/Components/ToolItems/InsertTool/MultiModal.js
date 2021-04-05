import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as XLSX from "xlsx";

function Confirmation_Deltete(props) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null)

  function readFile() {
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      props.addTools(convertToJson(data))
    };
    reader.readAsBinaryString(file);
  }

  function convertToJson(csv) {
    // skips empty lines
    var lines = csv.split("\n").filter((el) => el);
    var result = [];
    var headers = ["tool_id", "name"];
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  return (
    <div>
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Insert Sheet
      </Button>

      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title> Insert Sheet </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Import a sheet</h3>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false)
              readFile()
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Confirmation_Deltete;
