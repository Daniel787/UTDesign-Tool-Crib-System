import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import formComp from "../Form/Form";

function ModalForm() {
  const [modal, setModal] = useState(false);

  toggle = () => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  const label = props.buttonLabel;

  let button = "";
  let title = "";

  if (label == "Edit") {
    // Add onClick for editing quantity
    button = (
      <Button color="warning" style={{ float: "left", marginRight: "10px" }}>
        {" "}
        {label}{" "}
      </Button>
    );
    title = "Edit item";
  } else {
    button = (
      <Button
        color="success"
        onClick={this.toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}{" "}
      </Button>
    );
    title = "Add New Item";
  }
}

return (
  <div>
    {" "}
    {button}
    <Modal isOpen={modal} toggle={toggle} className={props.className}>
      <ModalHeader toggle={this.toggle} close={closeBtn}>
        {title}{" "}
      </ModalHeader>
      <ModalBody>
        <formComp />
      </ModalBody>
    </Modal>
  </div>
);
export default ModalForm;
