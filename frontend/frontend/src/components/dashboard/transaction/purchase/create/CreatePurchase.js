import CreatePurchaseForm from "./components/CreatePurchaseForm"
import CreatePurchaseTable from "./components/CreatePurchaseTable"
import ProductModal from "../productModal/ProductModal"
import { connect,useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import { createPurchaseAction } from "../../../../../redux/slices/purchaseSlices"
import './CreatePurchase.css'
import { parseDateTime } from "@material-ui/data-grid"
const CreatePurchase= (props)=>{
  const dispatch = new useDispatch();
    const [formData,setFormData] = new useState([])
    const [code,setCode] = new useState()
  const [supplier,setSupplier] = new useState()
  const [date,setDate] = new useState()
  const [notes,setNotes] = new useState()
  const [saleRef,setSaleRef] = new useState();
  const [status, setStatus] = new useState("paid")
  const [transaction,setTransaction] = new useState()
  const [days,setDays] = new useState(0)
  const [editable,setEditable] = new useState(true);
    const [productTable,setProductTable] = new useState(props.products)
    const [displayProduct,setDisplayProduct] = new useState([])
    const [modalShow, setModalShow] = useState(false);
    const [total,setTotal] = useState(0)
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
        const finalArray = [...displayProduct];
        let founds = false;
        let index = 0;
        const found = finalArray.findIndex(product=>product.code == data.code)
        console.log(found)
        if(found==-1){
          const newProduct = { ...data, quantity: 1 };
          const newArray = [newProduct, ...displayProduct];
          console.log(newArray)
          setDisplayProduct(newArray);
        }else{
          const array = [...displayProduct];
            array[index].quantity = parseInt(array[index].quantity) + 1;
            setDisplayProduct(array);
        }
    
      };

      const deleteProduct= (data)=>{
  
        setDisplayProduct(data)
      }
    
      const updateQuantity = (data) =>{
          
          setDisplayProduct(data)
      }
   
      const createPurchase = () =>{
        let day = days;
        let paid = 0;
        let installment=""
       if(status=="paid"){
         day = 0;
         paid = total;
         installment="none"
         setTransaction("paid")
       }else{
         installment="pending"
         setTransaction("unpaid")
       }
        const data = {
          code:code,
          supplier:supplier,
          date:date,
          notes:notes,
          total:total,
          status:status,
          transaction:transaction,
          days:day,
          unpaid:0,
          products:displayProduct,
          paid:paid,
          installment: installment
        }
        // console.log(data)
        dispatch(createPurchaseAction(data))
       
      }
      const setData=(data)=>{
        setFormData(data)
      }

      const updatePrice = (data)=>{
        setDisplayProduct(data);

      }
    return(
        <div>
            <CreatePurchaseForm data={formData} status={status} onSetData={setData} editable={editable}  action={"create"} onSetSaleRef={setSaleRef} onSetData={setData} onSetCode={setCode} onSetSupplier={setSupplier} onSetDate={setDate} onSetNotes={setNotes} onSetStatus={setStatus} onSetDays={setDays}></CreatePurchaseForm>
            <CreatePurchaseTable editable={true} action={"create"} onToggleModal={setModalShow} data={displayProduct} onUpdateQuantity={updateQuantity} onDeleteProduct={deleteProduct} onCreatePurchase={createPurchase} total={total} onUpdatePrice={updatePrice}></CreatePurchaseTable>
            <ProductModal products={productTable} show={modalShow} onHide={()=>setModalShow(false)} onAddProducts={addProduct} ></ProductModal>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.inventory.inventory
    }
}
export default connect(mapStateToProps,null) (CreatePurchase)