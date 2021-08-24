import CreatePurchaseForm from "./components/CreatePurchaseForm"
import CreatePurchaseTable from "./components/CreatePurchaseTable"
import ProductModal from "../../sales/productModal/ProductModal"
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

      const deleteProduct= (data)=>{
  
        setDisplayProduct(data)
      }
    
      const updateQuantity = (data) =>{
          
          setDisplayProduct(data)
      }

      const createPurchase = () =>{
        const data = {
          code:formData.code,
          supplier:formData.supplier,
          date:formData.date,
          notes:formData.notes,
          total:total,
          status: "paid",
          products:displayProduct,
          unpaid:0,
        }
        dispatch(createPurchaseAction(data))
       
      }
      const setData=(data)=>{
        setFormData(data)
      }
    return(
        <div>
            <CreatePurchaseForm editable={true} data={formData} onSetData={setData} onSetCode={setCode} onSetSupplier={setSupplier} onSetDate={setDate} onSetNotes={setNotes}></CreatePurchaseForm>
            <CreatePurchaseTable editable={true} action={"create"} onToggleModal={setModalShow} data={displayProduct} onUpdateQuantity={updateQuantity} onDeleteProduct={deleteProduct} onCreatePurchase={createPurchase} total={total}></CreatePurchaseTable>
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