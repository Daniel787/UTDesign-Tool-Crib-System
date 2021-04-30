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
            props.addGroups({ groups: convertToJson(data) });
        };
        reader.readAsBinaryString(file);
    }

    // converts file to json
    function convertToJson(csv) {
        // skips empty lines
        var lines = csv.split("\n").filter((el) => el);
        var result = [];
        var groupHeaders = ["group_id", "group_name", "group_sponsor", "students"];
        var studentHeader = ["net_id", "name", "email"]
        for (var i = 1; i < lines.length; i++) {
            var groupObj = {};
            var currentline = lines[i].split(",");
            if (currentline.filter(element => element.length === 0).length !== currentline.length) {
                groupObj[groupHeaders[0]] = currentline[0];
                groupObj[groupHeaders[1]] = currentline[3];
                groupObj[groupHeaders[2]] = currentline[4];
                groupObj[groupHeaders[3]] = []
                for (var j = 0; j < parseInt((currentline.length - 6) / 3); j++) {
                    var studentObj = {}
                    studentObj[studentHeader[0]] = currentline[6 + j * 3];
                    studentObj[studentHeader[1]] = currentline[7 + j * 3];
                    studentObj[studentHeader[2]] = currentline[8 + j * 3];
                    groupObj[groupHeaders[3]].push(studentObj)
                }
                result.push(groupObj);
            }
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
