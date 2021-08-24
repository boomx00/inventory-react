import PurchaseForm from "../create/components/CreatePurchaseForm"
import PurchaseTable from "../create/components/CreatePurchaseTable"
import ProductModal from "../../sales/productModal/ProductModal"
import { connect,useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { editPurchaseAction } from "../../../../../redux/slices/purchaseSlices"
const PurchaseInformation=(props)=>{
    const dispatch = useDispatch()
    const [formData,setFormData] = new useState(props.data)
    const [displayProduct,setDisplayProduct] = new useState(props.orders.products)
    const [total, setTotal] = new useState(props.data.total)
    const [modalShow, setModalShow] = new useState(false);
    const [productTable,setProductTable] = new useState(props.products)
    const [code,setCode] = new useState(props.data.code)
    const [supplier,setSupplier] = new useState(props.data.supplier)
    const [date,setDate] = new useState(props.data.date)
    const [notes,setNotes] = new useState(props.data.notes)
    const [editable,setEditable] = new useState(false);
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
      const editPurchase = ()=>{
      
        const data ={
            code:formData.code,
            supplier:formData.supplier,
            date:formData.date,
            notes:formData.notes,
            total:total,
            status:"paid",
            unpaid:0,
            products: displayProduct
        }
        // console.log(data)
        dispatch(editPurchaseAction(data))
    }

    const setData=(data)=>{
      setFormData(data)
    }
    return(
        <div>
            <div onClick={()=>{console.log(props.data)}}>as</div>
            <PurchaseForm data={formData} onSetData={setData} editable={editable} onSetCode={setCode} onSetSupplier={setSupplier} onSetDate={setDate} onSetNotes={setNotes} action={"edit"}></PurchaseForm>
            <PurchaseTable data={displayProduct} total={total} editable={editable} onSetEditable={setEditable} onUpdateQuantity={updateQuantity} onToggleModal={setModalShow} onEditPurchase={editPurchase} action={"edit"}></PurchaseTable>
            <ProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></ProductModal>

        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        products:state.inventory.inventory
    }
}
export default connect(mapStateToProps,null)(PurchaseInformation)