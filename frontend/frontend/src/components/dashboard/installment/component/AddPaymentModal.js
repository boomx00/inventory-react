import Modal from "react-bootstrap/Modal";
import './AddPaymentModal.css';
import ImageUploader from "../../../utilities/imageUploader/ImageUploader";
import { useState,useEffect } from "react";
import { createInstallmentPaymentAction,updateInstallmentPaymentAction,removeInstallmentPaymentAction } from "../../../../redux/slices/installmentPaymentSlices";
import { updateInstallmentStatusAction } from "../../../../redux/slices/installmentSlices";
import { useDispatch } from "react-redux";
import { ContactsOutlined } from "@material-ui/icons";
const AddPaymentModal=(props)=>{
    const dispatch = new useDispatch()
    const [date,setDate] = new useState(props.date);
    const [bankName,setBankName] = new useState(props.data? props.data.bankName:null);
    const [amount, setAmount] = new useState(props.data? props.data.amount:null);
    const [image,setImage] = new useState();
    const [editable,setEditable] = new useState(false);

    useEffect(() => {
      if(props.state=='view'){
        setDate(props.data.date)
        setBankName(props.data.bankName)
        setAmount(props.data.amount)
        setImage(props.data.image)
        setEditable(false)
      }else
      if(props.state=="create"){
        setEditable(true)
      }else
      if(props.state=="edit"){
        setEditable(true)
      }
   });
    const createPayment = () =>{
      if(parseInt(props.paid)+parseInt(amount)>props.total){
        alert("check amount again")
      }else{
      let imageUrlArray =[]
      image.forEach(image => {
        // let url = URL.createObjectURL(image)
        imageUrlArray.push(image)
      });
      const data = {
        purchaseRef: props.purchaseRef,
        type: "debit",
        date:date,
        bankName:bankName,
        amount: amount,
        image:imageUrlArray
      }
      dispatch(createInstallmentPaymentAction(data))
      if(parseInt(props.paid)+parseInt(amount)-props.total==0){
        dispatch(updateInstallmentStatusAction(props.purchaseRef))
        props.onSetStatus("paid")
      }
    }
  }
    const editPayment=()=>{
      console.log(props.data)
      props.onSetModalState("edit")
    }
    const Done=()=>{
      const data = {
        id: props.data.id,
        date: date,
        bankName:bankName,
        amount:amount,
        images:image
      }
      props.onSetModalState("view")
      // console.log(props.data.id)
      dispatch(updateInstallmentPaymentAction(data))
      props.setShow(false)
    }
    
    const Remove=()=>{
      props.setShow(false)
      dispatch(removeInstallmentPaymentAction(props.data.id))
      // console.log(props.data)
    }

    const cancelEdit=()=>{
      props.setShow(false)
      // console.log(props.data)
      if(props.data){
      setDate(props.data.date)
      setBankName(props.data.bankName)
      setAmount(props.data.amount)
      }
    }
    return(
        <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        backdrop={props.state=="edit"?"static":"false"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.state=="create" || props.state=="view"?<Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Select Products
          </Modal.Title>
        </Modal.Header>
:<Modal.Header>
<Modal.Title id="contained-modal-title-vcenter">
            Select Products
          </Modal.Title>
        </Modal.Header>}

          
        <Modal.Body>
          
          <div className="payment-modal-body">
            <label>Date</label>
            <input
            value={props.state=="create"?null:date}
            onChange={(text)=>setDate(text.target.value)}
            disabled={editable?false:true}
            ></input>
            <label>Bank Name</label>
            <input
            value={props.state=="create"?null:bankName}
            onChange={(text)=>setBankName(text.target.value)}
            disabled={editable?false:true}
            ></input>
            <label>Amount</label>
            <input
             value={props.state=="create"?null:amount}
             onChange={(text)=>setAmount(text.target.value)}
             disabled={editable?false:true}
             ></input>
            <ImageUploader 
            onSetImage={setImage}
            state={props.state} 
            images={props.data?props.data.image:[]}
            ></ImageUploader>
            <div>
              
              {props.state=="create"?<button onClick={createPayment}>Save</button>:
              props.state=="view" ?
              <button onClick={editPayment}>Edit</button>:
              <button onClick={Done}>Done</button>}
              <button onClick={Remove}>Remove</button>
              <div></div>
              {props.state=="edit"?<button onClick={cancelEdit}>Cancel</button>:null}
              </div>
          </div>
</Modal.Body>
      </Modal>
    )
}

export default AddPaymentModal