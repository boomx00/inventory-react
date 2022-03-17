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
  const [originalProducts, setOriginalProducts] = useState()
  const [deletedProducts, setDeletedProducts] = useState([])
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

  const onEditTrigger = () =>{
    setEditable(true)
    setOriginalProducts(displayProduct)
  }
  const addProduct = (data) => {
    const productCode = data.code;
    const deletedCopy = [...deletedProducts]
    const deletedIndex = deletedCopy.findIndex(deleted=>deleted.code == productCode)
    if (deletedIndex!=-1){
      deletedCopy.splice(index,1);
      setDeletedProducts(deletedCopy)
    }
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
    const newData=[]
    const newProducts = displayProduct.map( obj => ({
      ...obj
    }))
    displayProduct.forEach(function(dProduct){
      const index = originalProducts.findIndex(prod=>prod.code==dProduct.code)
      if(index==-1){
        console.log(dProduct)
        const difference = -dProduct.quantity
        const data = {
          code: dProduct.code,
          difference: difference
        }
        newData.push(data)
      }else{
        const difference = originalProducts[index].quantity - dProduct.quantity
        const data = {
          code: dProduct.code,
          difference: difference
        }
        newData.push(data)
      }
    })
    
    if (deletedProducts.length>0){
      deletedProducts.forEach(function(deleted){
        const data = {
          code: deleted.code,
          difference: deleted.quantity
        }
        newData.push(data)
      })
    }
    const data = {
      code:code,
      customer:customer,
      address:address,
      date:date,
      notes:notes,
      products:newData,
      newProducts: displayProduct,
      total:Total
    }
    // console.log(newData)
    dispatch(updateSalesAction(data));
    setEditable(false);
  }

  const setProductss = (data) =>{
  
    setDisplayProduct(data)
  }
  const updateQuantity = (data)=>{
    setDisplayProduct(data)

  }
  const setDeletedProduct=(data)=>{
    const copyDeleted = [...deletedProducts]
    copyDeleted.push(data)
    setDeletedProducts(copyDeleted)
  }
    return(
<div>
      <SalesInformationForm data={formData} editable={editable}></SalesInformationForm>
      {/* <div onClick={()=>console.log(displayProduct)}>aaa</div> */}
      <SalesInformationTable products={displayProduct} onSetDelete={setDeletedProduct} onSetProducts = {setProductss} onUpdateQuantity={updateQuantity} onEditSales={editSales} onToggleModal={setModalShow} total={Total} onEdit={onEditTrigger} editable={editable}></SalesInformationTable>
      <ProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></ProductModal>
    </div>    )


}

const mapStateToProps = (state) => {
    return {
      products: state.inventory.inventory,
    };
  };
  export default connect(mapStateToProps, null)(SalesInformation);
  