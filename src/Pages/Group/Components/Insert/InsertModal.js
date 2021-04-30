import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as XLSX from "xlsx";

export default function InsertModal(props) {
    const [file, setFile] = useState(null);
    const [show, setShow] = useState(false)

    // opens file
    function readFile() {
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            /* Update state */
            // props.addGroups(convertToJson(data));
        };
        reader.readAsBinaryString(file);
    }

    // converts file to json
    function convertToJson(csv) {
        // skips empty lines
        var lines = csv.split("\n").filter((el) => el);
        var result = [];
        var headers = ["part_id", "name", "quantity_available", "current_cost"];
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            console.log(currentline)
            // if (currentline.filter(element => element.length === 0).length !== currentline.length) {
            //     for (var j = 0; j < headers.length; j++) {
            //         obj[headers[j]] = currentline[j];
            //     }
            //     result.push(obj);
            // }
        }
        return (result); //JSON
    }

    return (
        <div>

            <Button onClick={() => { setShow(true) }}>
                Insert
            </Button>

            {/* modal */}
            <Modal
                show={show}
                onHide={() => {
                    setShow(false);
                    setFile(null)
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Insert Sheet </Modal.Title>
                </Modal.Header>
                {/* main part */}
                <Modal.Body>
                    <h3>Import a sheet</h3>
                    {/* prompts user for excel sheet */}
                    <input type="file" accept=".csv,.xls,.xlsx" onChange={(e) => setFile(e.target.files[0])} />
                </Modal.Body>
                {/* options */}
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShow(false);
                            setFile(null)
                        }}
                    >
                        {" "}
              Cancel{" "}
                    </Button>
                    {/* processes file if its valid */}
                    <Button
                        variant="primary"
                        disabled={!file}
                        onClick={() => {
                            setShow(false);
                            readFile();
                            setFile(null)
                        }}
                    >
                        Confirm
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
