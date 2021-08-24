// import "./CreateSales.css";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import { connect,useDispatch } from "react-redux";
import { createSalesAction, updateSalesAction } from "../../../../../redux/slices/salesSlices";
import { makeStyles } from '@material-ui/core/styles';

import { Tooltip } from '@material-ui/core';
import SalesInformationForm from './components/SalesInformationForm'
import SalesInformationTable from "./components/SalesInformationTable";
import ProductModal from "../productModal/ProductModal";
import './SalesInformation.css'
const SalesInformation = (props) =>{
  const useStyles = makeStyles((theme) => ({
    customWidth: {
      maxWidth: 120,
      fontSize: 12,
    },
  }));

  const classes = useStyles();

  
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false);  
  const [modalShow, setModalShow] = useState(false);
  const [code,setCode] = useState(props.data.code);
  const [customer,setCustomer] = useState(props.data.customer);
  const [address,setAddress] = useState(props.data.address);
  const [date,setDate] = useState(props.data.date);
  const [notes,setNotes] = useState(props.data.notes)
  const [productTable, setProducts] = useState(props.products);
  const [displayProduct, setDisplayProduct] = useState(props.orders.products);
  const [Total, setTotal] = useState(props.data.total)

  const formData = {
      code:code,
      customer:customer,
      address:address,
      date:date,
      notes:notes
  }
  // const func = () => {
   
  //   console.log(props.products);
  // };
  useEffect(() => {
    const array = [...displayProduct]

    let total = 0;
    for(let i = 0 ; i < array.length;i++){
      total = total + (array[i].price * array[i].quantity)
  }
  setTotal(total)
  });
  const addProduct = (data) => {
    const productCode = data.code;
    const array = displayProduct.map( obj => ({
      ...obj
    }))
    let found = false;
    let index = 0;
    if (displayProduct.length > 0) {
      for (let i = 0; i < displayProduct.length; i++) {
        if (productCode == displayProduct[i].code) {
          found = true;
          index = i;
          break;
        }
      }

      if (found == true) {
        const array = displayProduct.map( obj => ({
          ...obj
        }))
        array[index].quantity = parseInt(array[index].quantity) + 1;
        setDisplayProduct(array);
      } else {
        const newProduct = { ...data, quantity: 1 };
        const newArray = [newProduct, ...displayProduct];
        setDisplayProduct(newArray);
      }
    } else {
      const newProduct = { ...data, quantity: 1 };
      const newArray = [newProduct, ...displayProduct];
      setDisplayProduct(newArray);
    }
  };
  
  const editSales = () =>{
    const data = {
      code:code,
      customer:customer,
      address:address,
      date:date,
      notes:notes,
      products:displayProduct,
      total:Total
    }
    dispatch(updateSalesAction(data));
    // setEditable(false);
  }

  const setProductss = (data) =>{

    setDisplayProduct(data)
  }
  const updateQuantity = (data)=>{
    setDisplayProduct(data)

  }
    return(
<div>
      <SalesInformationForm data={formData} editable={editable}></SalesInformationForm>
      <SalesInformationTable products={displayProduct} onSetProducts = {setProductss} onUpdateQuantity={updateQuantity} onEditSales={editSales} onToggleModal={setModalShow} total={Total} onEdit={setEditable} editable={editable}></SalesInformationTable>
      <ProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></ProductModal>
    </div>    )


}

const mapStateToProps = (state) => {
    return {
      products: state.inventory.inventory,
    };
  };
  export default connect(mapStateToProps, null)(SalesInformation);
  