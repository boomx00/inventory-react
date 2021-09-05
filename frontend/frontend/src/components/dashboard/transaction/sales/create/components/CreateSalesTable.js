import { useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const CreateSalesProducts=(props)=>{
  const history = new useHistory()
  const [modalShow, setModalShow] = useState(false);
  let counter = 0;
  const useStyles = makeStyles((theme) => ({
    customWidth: {
      maxWidth: 120,
      fontSize: 12,
    },
  }));
  const classes = useStyles();

  const updateQuantity=(value,code)=>{
    const array = [...props.data]
      let index = 0;
      for(let i = 0 ; i < array.length;i++){
          if(code == array[i].code){
              index=i
          }
      }
      array[index].quantity = value
      props.onUpdateQuantity(array)
  }

  const deleteProduct=(data)=>{
    const array = [...props.data]
    let index = 0;
    for(let i = 0; i < array.length;i++){
        if(data.code == array[i].code){
            index = i;
        }
    }
    array.splice(index, 1);
    props.onDeleteProduct(array)
  }
  const createSales = () =>{
    props.onCreateSales()
    // history.push('/dashboard/sales')
  }
    return(
        <div className="products-container">
        <div className="add-product">
          <button 
          onClick={() => props.onToggleModal(true)}
          >Add</button>
        </div>
        <table>
          <tr>
            <th style={{ width: 50 }}>No</th>
            <th>Item</th>
            <th style={{ width: 20 }}>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {props.data.map((products) => (
            <tr>
              <td>{(counter += 1)}</td>
              <td>{products.name}</td>
              <td>
                <div className="quantity-logo">
                  <input type="number" 
              value={products.quantity} 
              onChange={(e)=>updateQuantity(e.target.value,products.code)} 
              ></input> 
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
                <button onClick={() => {
                      const data = {
                        code: products.code,
                        name: products.name,
                        price: products.price,
                        stock: products.stock,
                      };
                      deleteProduct(data);
                    }}>delete</button>
              </td>
            </tr>
          ))}
        </table>

        <div className="create-sales-total-wrapper">
          <div className="create-sales-total">
            <h3>Total</h3>
            <input value={props.total  } 
            disabled={true}></input>
            </div>
          <div className="create-sales-paid">
            <h3>Paid</h3>
            <input></input></div>

        </div>
        <button 
        onClick={createSales}
        >Save</button>
      </div>
    )
}
export default CreateSalesProducts