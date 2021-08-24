import Modal from "react-bootstrap/Modal";

const AddPaymentModal=(props)=>{
    return(
        <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
<Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select Products
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
</Modal.Body>
      </Modal>
    )
}

export default AddPaymentModal