import './createBar.css'
const createBar=(props)=>{
    const createInstallment=()=>{
        props.onCreateInstallment()
    }
    return(
        <div className='mm'>
            <button className="confirmButton" onClick={createInstallment}>Create Installment</button>

        </div>
    )

}
export default createBar