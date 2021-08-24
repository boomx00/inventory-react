import "./CreateSales.css";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import { connect,useDispatch } from "react-redux";
import { createSalesAction } from "../../../../../redux/slices/salesSlices";
import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateSalesForm from "./components/CreateSalesForm";
import CreateSalesTable from "./components/CreateSalesTable"
import ProductModal from "../productModal/ProductModal";
const CreateSales = (products) => {
  const useStyles = makeStyles((theme) => ({
    customWidth: {
      maxWidth: 120,
      fontSize: 12,
    },
  }));

  const classes = useStyles();
  useEffect(() => {
    const array = [...displayProduct]

    let total = 0;
    for(let i = 0 ; i < array.length;i++){
      total = total + (array[i].price * array[i].quantity)
  }
  setTotal(total)
  });
const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);
  const [code,setCode] = useState();
  const [customer,setCustomer] = useState();
  const [address,setAddress] = useState();
  const [date,setDate] = useState();
  const [notes,setNotes] = useState()
  const [productTable, setProducts] = useState(products.products);
  const [total,setTotal] = useState(0)
  const [displayProduct, setDisplayProduct] = useState([]);
  const func = () => {
    console.log(products.products);
  };
  const addProduct = (data) => {
    const productCode = data.code;
    const finalArray = [...displayProduct];
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
        const array = [...displayProduct];
        array[index].quantity = parseInt(array[index].quantity) + 1;
        setDisplayProduct(array);
        console.log(array);
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

  const deleteProduct= (data)=>{
  
    setDisplayProduct(data)
  }

  const updateQuantity = (data) =>{
      
      setDisplayProduct(data)
  }

  const createSales = () =>{
    const array = [...displayProduct]

      let total = 0;
      for(let i = 0 ; i < array.length;i++){
        total = total + (array[i].price * array[i].quantity)
    }
    
      const data = {
        code:code,
        customer:customer,
        address:address,
        date:date,
        notes:notes,
        products:displayProduct,
        total: total
      }
    //   console.log(array[0])
      dispatch(createSalesAction(data))
  }
  const formData = {
    code:code,
    customer:customer,
    address:address,
    date:date,
    notes:notes
  }
  return (
    <div>
      <CreateSalesForm data={formData} onSetCode={setCode} onSetCustomer={setCustomer} onSetAddress={setAddress} onSetDate={setDate} onSetNotes={setNotes} ></CreateSalesForm>
      <CreateSalesTable data={displayProduct} onToggleModal={setModalShow} onUpdateQuantity={updateQuantity} onDeleteProduct={deleteProduct} onCreateSales={createSales} total={total}></CreateSalesTable>
      <ProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></ProductModal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.inventory.inventory,
  };
};
export default connect(mapStateToProps, null)(CreateSales);
