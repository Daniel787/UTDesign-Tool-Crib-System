import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as XLSX from "xlsx";

function Confirmation_Deltete(props) {
  const [file, setFile] = useState(null);

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
      props.addTools(convertToJson(data));
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
      if (currentline[0].length > 0) {
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }
    }
    //return result; //JavaScript object
    return (result); //JSON
  }

  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => {
          setFile(null)
          props.setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title> Insert Sheet </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Import a sheet</h3>
          <input type="file" accept=".csv,.xls,.xlsx" onChange={(e) => setFile(e.target.files[0])} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setFile(null)
              props.setShow(false);
            }}
          >
            {" "}
            Cancel{" "}
          </Button>
          <Button
            variant="primary"
            disabled={!file}
            onClick={() => {
              props.setShow(false);
              setFile(null)
              readFile();
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
