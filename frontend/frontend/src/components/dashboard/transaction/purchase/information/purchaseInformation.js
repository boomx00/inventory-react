import PurchaseForm from "../create/components/CreatePurchaseForm"
import PurchaseTable from "../create/components/CreatePurchaseTable"
import ProductModal from "../../sales/productModal/ProductModal"
import { connect,useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { editPurchaseAction } from "../../../../../redux/slices/purchaseSlices"
import { findParentElementFromClassName } from "@material-ui/data-grid"
const PurchaseInformation=(props)=>{
    const dispatch = useDispatch()
    const [formData,setFormData] = useState(props.data)
    const [displayProduct,setDisplayProduct] = new useState(props.orders.products)
    const [total, setTotal] = new useState(props.data.total)
    const [modalShow, setModalShow] = new useState(false);
    const [productTable,setProductTable] = new useState(props.products)
    const [code,setCode] = new useState(props.data.code)
    const [days,setDays] = new useState(props.data.days)
    const [status,setStatus] = new useState(props.data.status)
    const [supplier,setSupplier] = new useState(props.data.supplier)
    const [saleRef,setSaleRef] = new useState(props.data.saleRef)
    const [date,setDate] = new useState(props.data.date)
    const [notes,setNotes] = new useState(props.data.notes)
    const [installment,setInstallment] = new useState(props.data.installment)
    const [originalProducts, setOriginalProducts] = useState()
    const [editable,setEditable] = new useState(false);
    const [deletedProducts, setDeletedProducts] = useState([])


    const onEditTrigger = () =>{
      setEditable(true)
      setOriginalProducts(displayProduct)
    }
    const setDaysHandler=(data)=>{
      setDays(data)
      let copyArray = {...props.data}
      copyArray.days=data
      setFormData(copyArray)
      console.log(days)
    }
    const setStatusHandler=(data)=>{
      setStatus(data)
      let copyArray = {...props.data}
      copyArray.status=data
      if(data=="paid"){
        setDays(0)
      }
      setFormData(copyArray)
    }
    const setNotesHandler=(data)=>{
      setNotes(data)
      let copyArray = {...props.data}
      copyArray.notes=data
      setFormData(copyArray)
    }
    const setDateHandler=(data)=>{
      setDate(data)
      let copyArray = {...props.data}
      copyArray.date=data
      setFormData(copyArray)
    }
    const setSupplierHandler=(data)=>{
      setSupplier(data)
      let copyArray = {...props.data}
      copyArray.supplier=data
      setFormData(copyArray)
    }
    const setCodeHandler=(data)=>{
      setCode(data)
      let copyArray = {...props.data}
      copyArray.code=data
      setFormData(copyArray)
      
    }
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
            const array = displayProduct.map( obj => ({
              ...obj
            }))
            array[index].quantity = parseInt(array[index].quantity) + 1;
            setDisplayProduct(array);
          } else {
            data.price = 0
            const newProduct = { ...data, quantity: 1 };
            const newArray = [newProduct, ...displayProduct];
            setDisplayProduct(newArray);
          }
        } else {
          data.price = 0
          const newProduct = { ...data, quantity: 1 };
          const newArray = [newProduct, ...displayProduct];
          setDisplayProduct(newArray);
        }
      };
      const editPurchase = ()=>{
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
        const data ={
            code:code,
            supplier:supplier,
            date:date,
            notes:notes,
            status:status,
            days:days,
            saleRef:saleRef,
            total:total,
            status:status,
            unpaid:0,
            products: displayProduct,
            changes:newData,
            installment:installment
        }
        console.log(data)
        dispatch(editPurchaseAction(data))
    }
    const updatePrice=(data)=>{
      setDisplayProduct(data)
    }
    const setProductss = (data) =>{
  
      setDisplayProduct(data)
    }
    const setDeletedProduct=(data)=>{
      const copyDeleted = [...deletedProducts]
      copyDeleted.push(data)
      setDeletedProducts(copyDeleted)
    }
    return(
        <div>
            <div onClick={()=>{console.log(props.data)}}>as</div>
            <PurchaseForm 
            data={formData} 
            status={status} 
            days={days} 
            onSetDays={setDaysHandler} 
            editable={editable} 
            onSetCode={setCodeHandler} 
            onSetSupplier={setSupplierHandler} 
            onSetDate={setDateHandler} 
            onSetNotes={setNotesHandler} 
            onSetStatus={setStatusHandler} 
            action={"edit"}></PurchaseForm>
            <PurchaseTable products={displayProduct} data={displayProduct} onSetDelete={setDeletedProduct} onSetProducts = {setProductss} total={total} editable={editable} onSetEditable={onEditTrigger} onUpdateQuantity={updateQuantity} onToggleModal={setModalShow} onEditPurchase={editPurchase} onUpdatePrice={updatePrice} action={"edit"}></PurchaseTable>
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