import './App.css'
import { useState} from 'react'
import ProductService from './services/Product'
import md5 from 'md5'

//props otettu vastaan suoraan nimellä
const ProductAdd = ({setLisäystila, setIsPositive,setshowMessage,setMessage}) => {

    //komponentin tilan määritys

    const [newProductName, setNewProductName] = useState('')
    const [newSupplierId, setNewSupplierId] = useState(1)
    const [newCategoryId, setNewCategoryId] = useState(1)
    const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('')
    const [newUnitPrice, setNewUnitPrice] = useState(1)
    const [newUnitsInStock, setNewUnitsInStock] = useState(1)
    const [newUnitsOnOrder, setNewUnitsOnOrder] = useState(1)
    const [newReorderLevel, setNewReorderLevel] = useState(1)
    const [newDiscontinued, setNewDiscontinued] = useState(false)

    
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newProduct ={
            productname : newProductName,
            supplierid : newSupplierId,
            categoryid : newCategoryId,
            quantityperunit : newQuantityPerUnit,
            unitprice : newUnitPrice,
            unitsinstock : newUnitsInStock,
            unitsonorder : newUnitsOnOrder,
            reorderlevel : newReorderLevel,
            discontinued : newDiscontinued
        }
        ProductService.create(newProduct)
        .then(response =>{
            if(response.status === 200){
                setMessage(`Added new product:  ${newProduct.productname}`)
                setIsPositive(true)
                setshowMessage(true)

                setTimeout(() => {
                    setshowMessage(false)
                },5000)

                setLisäystila(false)
            }
        })
        .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setshowMessage(true)

            setTimeout(() => {
                setshowMessage(false)
            },5000)
        })

    }


  return (
    <div id='addNew'>
        
        <h2>Product add</h2>

        <form onSubmit={handleSubmit}>
         <div><input className='lomake' type='text' value={newProductName}onChange={({target}) => setNewProductName(target.value)} placeholder='Product name' /></div>
         <div><input className='lomake' type='number' value={newSupplierId} onChange={({target}) => setNewSupplierId(target.value)} placeholder='SupplierID' /></div>
         <div><input className='lomake' type='number' value={newCategoryId} onChange={({target}) => setNewCategoryId(target.value)} placeholder='CategoryID' /></div>
         <div><input className='lomake' type='text' value={newQuantityPerUnit} onChange={({target}) => setNewQuantityPerUnit(target.value)} placeholder='QuantityPerUnit' /></div>
         <div><input className='lomake' type='number' value={newUnitPrice} onChange={({target}) => setNewUnitPrice(target.value)} placeholder='UnitPrice' /></div>
         <div><input className='lomake' type='number' value={newUnitsInStock} onChange={({target}) => setNewUnitsInStock(target.value)} placeholder='UnitsInStock' /></div>
         <div><input className='lomake' type='number' value={newUnitsOnOrder} onChange={({target}) => setNewUnitsOnOrder(target.value)} placeholder='UnitsOnOrder' /></div>
         <div><input className='lomake' type='number' value={newReorderLevel} onChange={({target}) => setNewReorderLevel(target.value)} placeholder='Reorderlevel' /></div>
         <div><input className='lomake' type='text' value={newDiscontinued} onChange={({target}) => setNewDiscontinued(target.value)} placeholder='Discontinued' readOnly /></div>
        
            <input className='save' type='submit' value='save' />
            <input className='back' type='button' value='back' onClick={() => setLisäystila(false)} />
        </form>


    </div>
  )
}

export default ProductAdd