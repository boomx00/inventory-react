import { makeStyles } from '@material-ui/core/styles';
import { useState,useEffect } from "react";

import { Tooltip } from '@material-ui/core';

const SalesInformationTable=(props)=>{
    const [modalShow, setModalShow] = useState(false);
    const [editable, setEditable] = useState(props.editable);  
    const [total, setTotal] = useState(props.total)

   
    let counter = 0;

    const useStyles = makeStyles((theme) => ({
        customWidth: {
          maxWidth: 120,
          fontSize: 12,
        },
      }));
    
      const classes = useStyles();
      const deleteProduct= (data)=>{
        const array = [...props.products]

        let index = 0;
        for(let i = 0; i < array.length;i++){
            if(data.code == array[i].code){
                index = i;
            }
        }
        array.splice(index, 1);
        // console.log(array)

        // // console.log(array)
        props.onSetProducts(array)
      }

      const updateQuantity = (value,code) =>{
        const array = props.products.map( obj => ({
          ...obj
        }))
    
          let index = 0;
          for(let i = 0 ; i < array.length;i++){
              if(code == array[i].code){
                  index=i
              }
          }
          array[index].quantity = value
    
          // console.log(array)
          
          props.onUpdateQuantity(array)
      }
      const editSales = () =>{
        
        props.onEditSales()
        // setEditable(false);
      }
    return(
<div className="products-container">
        <div className="add-product">
          <button onClick={() => props.onToggleModal(true)} hidden={props.editable?false:true} >Add</button>
        </div>
        <table className="sales-information-table">
          <tr>
            <th style={{ width: 50 }}>No</th>
            <th>Item</th>
            <th style={{ width: 20 }}>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {props.products.map((products,i) => (
            <tr>
              <td>{(counter += 1)}</td>
              <td>{products.name}</td>  
              <td>
                <div className="quantity-logo">
                  <input type="number" 
              value={products.quantity} 
              onChange={(e)=>updateQuantity(e.target.value,products.code)} 
              disabled={props.editable?false:true}></input> 
              <div className="info-logo">
                <Tooltip title={
                  "Amount in stock: "+products.stock
                  
                  } placement="top" arrow classes={{ tooltip: classes.customWidth }}><span >&#9432; </span></Tooltip>
                </div>
                </div>
                </td>
              <td>{products.price}</td>
              <td>{products.price * products.quantity}</td>
              <td>
                <button 
                onClick={() => {
                      const data = {
                        code: products.code,
                        name: products.name,
                        price: products.price,
                        stock: products.stock,
                      };
                      deleteProduct(data);
                    }}
                    hidden={props.editable?false:true}
                    >delete</button>
              </td>
            </tr>
          ))}
        </table>
        <div className="create-sales-total-wrapper">
          <div className="create-sales-total">
            <h3>Total</h3>
            <input value={props.total} disabled={true}></input>
            </div>
          <div className="create-sales-paid">
            <h3>Paid</h3>
            <input></input></div>

        </div>
        <button 
        onClick={()=>props.onEdit(true)} 
        hidden={props.editable?true:false}>Edit</button>
        <button
        onClick={()=>props.onSetProducts()}

         onClick={editSales}
         hidden={props.editable?false:true}>Save</button>

      </div>
    )
}
export default SalesInformationTable