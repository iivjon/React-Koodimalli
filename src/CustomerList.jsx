import './App.css'
import { useState, useEffect } from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'
//props otettu vastaan suoraan nimellä
const CustomerList = ({setIsPositive,setshowMessage,setMessage}) => {
  
    const [customers, setCustomers] = useState([])

    const [showCustomers, setshowCustomers] = useState(false)

    const[lisäystila, setLisäystila] = useState(false)

    const[reload, reloadNow] = useState(false)

  useEffect(()=>{
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
  } , [lisäystila, reload]
  )

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

        {lisäystila && <CustomerAdd setLisäystila={setLisäystila}
        setIsPositive={setIsPositive} setMessage={setMessage} setshowMessage={setshowMessage}
         />}

        {
            showCustomers && customers && customers.map(c =>(
                <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setshowMessage={setshowMessage} setMessage={setMessage} />
            ))
        }
        

    </>
  )
}

export default CustomerList