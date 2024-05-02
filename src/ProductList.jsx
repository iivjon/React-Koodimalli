import './App.css'
import { useState, useEffect } from 'react'
import ProductService from './services/Product'
import ProductAdd from './ProductAdd'
import Product from './Product'
import ProductEdit from './ProductEdit'
//import Product from './services/Product'

//props otettu vastaan suoraan nimellä
const ProductList = ({setIsPositive,setshowMessage,setMessage}) => {
  
  //Komponenttien tilojen määritys
    const [product, setProduct] = useState([])
    const [showProduct, setshowProduct] = useState(false)
    const [lisäystila, setLisäystila] = useState(false)
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [reload, reloadNow] = useState(false)
    const [muokattavaTuote, setMuokattavaTuote] = useState(false)
    const [search, setSearch] = useState("")


    //Ajetaan aina kun sivu latautuu
  useEffect(()=>{
    ProductService.getAll()
    .then(data => {
        setProduct(data)
    })
    //Ajetaan kun joku näistä muuttuu
  } , [lisäystila, reload, muokkaustila]
  )
 //Hakukenttä onChange tapahtumakäsittelijä
  const handleSearchInputChange = (event) => {
    setshowProduct(true)
    setSearch(event.target.value.toLowerCase())
  }

  const editProduct = (product) => {
    setMuokattavaTuote(product)
    setMuokkaustila(true)
  }

  return (
    <>
       
          <h1><nobr style={{ cursor : 'pointer'}}
        onClick={() => setshowProduct(!showProduct)}>Products</nobr>

        {!lisäystila && <button className='nappi' onClick={() => setLisäystila(true)}>Add new</button>}</h1>

        {lisäystila && <ProductAdd setLisäystila={setLisäystila}
        setIsPositive={setIsPositive} setMessage={setMessage}setshowMessage={setshowMessage}/>} 

        {muokkaustila && <ProductEdit setMuokkaustila={setMuokkaustila}
        setIsPositive={setIsPositive} setMessage={setMessage}setshowMessage={setshowMessage}
        muokattavaTuote={muokattavaTuote}/>} 

       
        {!lisäystila && !muokkaustila &&
        <input placeholder='Search by Name' value={search} onChange={handleSearchInputChange}>
          </input>} 


          {
                !lisäystila && !muokkaustila &&  showProduct && product && product.map(p =>
                  {
                    const lowerCaseName = p.productName.toLowerCase()
                    if (lowerCaseName.indexOf(search)> -1){
                  return(
                <Product key={p.productId} product={p} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setshowMessage={setshowMessage} setMessage={setMessage}
                editProduct={editProduct} />
            )
          }
          }
          )
        }
        

    </>
  )
}

export default  ProductList