import './App.css'
import { useState, useEffect } from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'
import CustomerEdit from './CustomerEdit'
//props otettu vastaan suoraan nimellä
const CustomerList = ({setIsPositive,setshowMessage,setMessage}) => {
  
  //Komponenttien tilojen määritys
    const [customers, setCustomers] = useState([])
    const [showCustomers, setshowCustomers] = useState(false)
    const [lisäystila, setLisäystila] = useState(false)
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [reload, reloadNow] = useState(false)
    const [muokattavaCustomer, setMuokattavaCustomer] = useState(false)
    const [search, setSearch] = useState("")

    //Ajetaan aina kun sivu latautuu
  useEffect(()=>{
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
    //Ajetaan kun joku näistä muuttuu
  } , [lisäystila, reload, muokkaustila]
  )
 //Hakukenttä onChange tapahtumakäsittelijä
  const handleSearchInputChange = (event) => {
    setshowCustomers(true)
    setSearch(event.target.value.toLowerCase())
  }

  const editCustomer = (customer) => {
    setMuokattavaCustomer(customer)
    setMuokkaustila(true)
  }

  return (
    <>
        {/* <h2 onClick={() => setshowCustomers(!showCustomers)}>Customers</h2>   */}
        {/* {showPost && <button onClick={() => setshowPost(!showPost)}>Piilota data</button>}

        {!showPost && <button onClick={() => setshowPost(!showPost)}>Näytä data</button>} 
        {
        showPost &&  posts && posts.map(p =>
            <div className='posts' key={p.id}>
              <h2>ID number: {p.id}</h2>
              <h4 className='postText'>{p.title}</h4>
              <p>{p.body}</p>
              </div>
              
            )
        }      */}
        <h1><nobr style={{ cursor : 'pointer'}}
        onClick={() => setshowCustomers(!showCustomers)}>Customers</nobr>



        {!lisäystila && <button className='nappi' onClick={() => setLisäystila(true)}>Add new</button>}</h1>

        {!lisäystila && !muokkaustila &&
        <input placeholder='Search by company name' value={search} onChange={handleSearchInputChange}>
          </input>} 

        {lisäystila && <CustomerAdd setLisäystila={setLisäystila}
        setIsPositive={setIsPositive} setMessage={setMessage} setshowMessage={setshowMessage}
         />}

        {muokkaustila && <CustomerEdit setMuokkaustila={setMuokkaustila}
        setIsPositive={setIsPositive} setMessage={setMessage} setshowMessage={setshowMessage}
        muokattavaCustomer={muokattavaCustomer}
         />}

        {
                !lisäystila && !muokkaustila &&  showCustomers && customers && customers.map(c =>
                  {
                    const lowerCaseName = c.companyName.toLowerCase()
                    if (lowerCaseName.indexOf(search)> -1){
                  return(
                <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setshowMessage={setshowMessage} setMessage={setMessage}
                editCustomer={editCustomer} />
            )
          }
          }
          )
        }
        

    </>
  )
}

export default CustomerList