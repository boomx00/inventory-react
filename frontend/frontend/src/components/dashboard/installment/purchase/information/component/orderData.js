import { useHistory } from "react-router";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';
const orderData=(props)=>{
    let counter = 0;
    const UseStyles = makeStyles((theme) => ({
        customWidth: {
          maxWidth: 120,
          fontSize: 12,
        },
      }));
    const classes = UseStyles();

    return(<div className="products-container">
        <table>
          <tr>
            <th style={{ width: 50 }}>No</th>
            <th>Item</th>
            <th style={{ width: 20 }}>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {props.data.map((products) => (
            <tr>
              <td>{(counter += 1)}</td>
              <td>{products.name}</td>
              <td>
                <div className="quantity-logo">
                  <input type="number" 
                  disabled={true}
              value={products.quantity} 
              ></input> 
              {/* <div className="info-logo">
                <Tooltip title={
                  "Amount in stock: "+products.stock
                  
                  } placement="top" arrow classes={{ tooltip: classes.customWidth }}><span >&#9432; </span></Tooltip>
                </div> */}
                </div>
                </td>

              <td>
                <input type="number"                 
  value={products.price} 
  disabled={true}

  >
                
                </input>
                </td>
              <td>{products.price && products.quantity? products.price*products.quantity:0}</td>
              
            </tr>
          ))}
        </table>

    </div>
    )
}
export default orderData