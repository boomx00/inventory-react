import Modal from "react-bootstrap/Modal";

const PendingProductModal = (props)=>{
    const addProduct = (data) => {
        props.onAddProducts(data)
      };
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
          <h4>Centered Modal</h4>
          <table>
            <tr>
              <td>Code</td>
              <td>Product Name</td>
              <td>To Buy</td>
              <td>Action</td>
            </tr>
            {props.products.map((images) => (
              <tr>
                <td>{images.code}</td>
                <td>{images.name}</td>
                <td>{images.toBuy}</td>
                <td>
                  <button
                    onClick={() => {
                      const data = {
                        code: images.code,
                        name: images.name,
                        toBuy: images.toBuy
                      };
                      addProduct(data);
                    }}
                  >
                    add
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    )
}

export default PendingProductModal