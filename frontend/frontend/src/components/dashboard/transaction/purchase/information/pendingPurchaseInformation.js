import PurchaseForm from "../create/components/CreatePurchaseForm"
import PurchaseTable from "../create/components/CreatePurchaseTable"
import PendingProductModal from "../components/categories/utilities/pendingProductModal"
import { connect,useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { createPurchaseAction } from "../../../../../redux/slices/purchaseSlices"
const PendingPurchaseInformation=(props)=>{
    const dispatch = useDispatch()
    const [formData,setFormData] = new useState(props.data)
    const [displayProduct,setDisplayProduct] = new useState([])
    const [total, setTotal] = new useState(props.data.total)
    const [modalShow, setModalShow] = new useState(false);
    const [productTable,setProductTable] = new useState(props.product)
    const [saleRef,setSaleRef] = new useState(props.data.saleRef)
    const [editable,setEditable] = new useState(true);
    useEffect(() => {
        const array = [...displayProduct]
    
        let total = 0;
        for(let i = 0 ; i < array.length;i++){
          total = total + (array[i].price * array[i].quantity)
      }
      setTotal(total)
      });
    const updateQuantity = (data) =>{
          
        setDisplayProduct(data)
    }

    const updatePrice=(data)=>{
      setDisplayProduct(data)
    }
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
            console.log(array)
            array[index].quantity = parseInt(array[index].quantity) + 1;
            setDisplayProduct(array);
          } else {
            const newProduct = { ...data, quantity: data.toBuy };
            const newArray = [newProduct, ...displayProduct];
            setDisplayProduct(newArray);
          }
        } else {
          const newProduct = { ...data, quantity: data.toBuy };
          const newArray = [newProduct, ...displayProduct];
          setDisplayProduct(newArray);
        }
        const indexx = productTable.findIndex(products=>
          products.code == data.code
        )
        
        const arrays = [...productTable]
        arrays.splice(indexx,1)
        setProductTable(arrays)
        // console.log(productTable)
      };
      const createPurchase = ()=>{
        const data ={
            code:formData.code,
            supplier:formData.supplier,
            date:formData.date,
            notes:formData.notes,
            saleRef: saleRef,
            total:total,
            status:"paid",
            unpaid:0,
            products: displayProduct
        }

        // // console.log(data)
        dispatch(createPurchaseAction(data))
    }

    const setData=(data)=>{
      setFormData(data)
    }
    return(
        <div>
            <p onClick={()=>console.log(productTable)}>asdfasdf</p>
            <PurchaseForm data={formData} onSetData={setData} editable={editable}  action={"create"}></PurchaseForm>
            <PurchaseTable data={displayProduct} total={total} editable={editable} onSetEditable={setEditable} onUpdatePrice={updatePrice} onUpdateQuantity={updateQuantity} onToggleModal={setModalShow}  action={"create"} onCreatePurchase={createPurchase}></PurchaseTable>
            <PendingProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></PendingProductModal>

        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        products:state.inventory.inventory
    }
}
export default connect(mapStateToProps,null)(PendingPurchaseInformation)