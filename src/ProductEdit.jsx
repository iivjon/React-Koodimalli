import './App.css'
import { useState} from 'react'
import ProductService from './services/Product'
import md5 from 'md5'

//props otettu vastaan suoraan nimellä
const ProductEdit = ({setMuokkaustila, setIsPositive,setshowMessage,setMessage,muokattavaTuote}) => {

    //komponentin tilan määritys
    const [newProductId, setNewProducId] = useState(muokattavaTuote.productId)
    const [newProductName, setNewProductName] = useState(muokattavaTuote.productName)
    const [newSupplierId, setNewSupplierId] = useState(muokattavaTuote.supplierId)
    const [newCategoryId, setNewCategoryId] = useState(muokattavaTuote.categoryId)
    const [newQuantityPerUnit, setNewQuantityPerUnit] = useState(muokattavaTuote.quantityPerUnit)
    const [newUnitPrice, setNewUnitPrice] = useState(muokattavaTuote.unitPrice)
    const [newUnitsInStock, setNewUnitsInStock] = useState(muokattavaTuote.unitsInStock)
    const [newUnitsOnOrder, setNewUnitsOnOrder] = useState(muokattavaTuote.unitsOnOrder)
    const [newReorderLevel, setNewReorderLevel] = useState(muokattavaTuote.reorderLevel)
    const [newDiscontinued, setNewDiscontinued] = useState(false)

    
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newProduct ={
            productId : newProductId,
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
        ProductService.update(newProduct)
        .then(response =>{
            if(response.status === 200){
                setMessage(`Edited product:  ${newProduct.productname}`)
                setIsPositive(true)
                setshowMessage(true)

                setTimeout(() => {
                    setshowMessage(false)
                },5000)

                setMuokkaustila(false)
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
    <div id='proEdit'>
        
        <h2>Product edit</h2>

        <form onSubmit={handleSubmit}>
         <div><input className='lomake' type='number' value={newProductId} disabled /></div>
         <div><input className='lomake' type='text' value={newProductName}onChange={({target}) => setNewProductName(target.value)} placeholder='Product name' /></div>
         <div><input className='lomake' type='number' value={newSupplierId} onChange={({target}) => setNewSupplierId(target.value)} placeholder='SupplierID' /></div>
         <div><input className='lomake' type='number' value={newCategoryId} onChange={({target}) => setNewCategoryId(target.value)} placeholder='CategoryID' /></div>
         <div><input className='lomake' type='text' value={newQuantityPerUnit} onChange={({target}) => setNewQuantityPerUnit(target.value)} placeholder='QuantityPerUnit' /></div>
         <div><input className='lomake' type='number' value={newUnitPrice} onChange={({target}) => setNewUnitPrice(target.value)} placeholder='UnitPrice' /></div>
         <div><input className='lomake' type='number' value={newUnitsInStock} onChange={({target}) => setNewUnitsInStock(target.value)} placeholder='UnitsInStock' /></div>
         <div><input className='lomake' type='number' value={newUnitsOnOrder} onChange={({target}) => setNewUnitsOnOrder(target.value)} placeholder='UnitsOnOrder' /></div>
         <div><input className='lomake' type='number' value={newReorderLevel} onChange={({target}) => setNewReorderLevel(target.value)} placeholder='Reorderlevel' /></div>
         <div><input className='lomake' type='text' value={newDiscontinued} onChange={({target}) => setNewDiscontinued(target.value)} placeholder='Discontinued' /></div>

            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
        </form>


    </div>
  )
}

export default ProductEdit