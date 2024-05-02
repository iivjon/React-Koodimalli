import './App.css'
import { useState } from 'react'
import ProductService from './services/Product'
//props otettu vastaan suoraan nimellä
const Product = ({product, editProduct, setIsPositive,setshowMessage,setMessage, reload, reloadNow}) => {

    const [showDetails, setshowDetails] = useState(false)

    const deleteProduct =(product) => {
        alert("Olet poistamassa tuotetta: " + product.productName)
        let vastaus = window.confirm(`Poista tuote: ${product.productName}`)

        if (vastaus === true){
        
        ProductService.remove(product.productId)
        .then(res => {
            if (res.status === 200){
                setMessage(`Tuote ${product.productName} poistettu!`)
                setIsPositive(true)
                setshowMessage(true)
                window.scrollBy(0,-10000)//scrollataan sivu ylös
            //Piilotuksen poisto
            setTimeout(() => {
            setshowMessage(false)},5000
        )
        reloadNow(!reload)
            }

            }
            )

            .catch(error => {
                setMessage(error)
                setIsPositive(false)
                setshowMessage(true)
                window.scrollBy(0,-10000)
    
                setTimeout(() => {
                    setshowMessage(false)
                },5000)
            })
        }
        else{
        setMessage('Poisto peruttu onnistuneesti!')
        setIsPositive(true)
        setshowMessage(true)
        window.scrollBy(0,-10000)
    //Piilotuksen poisto
    setTimeout(() => {
    setshowMessage(false)},5000
        
)
        }

    }

  return (
    <div className='custDiv'>

          <h4 onClick={() => setshowDetails(!showDetails)}>
            {product.productName}</h4>

        {showDetails && <div className='userDetails'>
            
            <button className='delete' onClick={() => deleteProduct(product)}>Delete</button>
            <button className='edit' onClick={() => editProduct(product)}>Edit</button>
            <table>
                <thead>
                    <tr>
                     <th>Productname</th>
                     <th>SupplierID</th>
                     <th>CategoryID</th>
                     <th>QuantityPerUnit</th>
                     <th>UnitPrice</th>
                     <th>UnitsInStock</th>
                     <th>UnitsOnOrder</th>
                     <th>ReorderLevel</th>
                     <th>Discontinued</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td>{product.productName}</td>
                         <td>{product.supplierId}</td>
                         <td>{product.categoryId}</td>
                         <td>{product.quantityPerUnit}</td>
                         <td>{product.unitPrice}</td>
                         <td>{product.unitInStock}</td>
                         <td>{product.unitsOnOrder}</td>
                         <td>{product.reorderLevel}</td>
                         <td>{product.discontinued}</td>
                    </tr>
                </tbody>
                </table>
                </div>}
    </div>
  )
}

export default Product